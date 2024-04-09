"use client"; // next.js(v13이상)에서 react이면 제거
import React, { DOMAttributes, useRef } from "react";
import { Controller, RefCallBack } from "react-hook-form";
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type TForm<
  T extends FieldValues = FieldValues,
  K extends FieldPath<T> = FieldPath<T>
> = {
  onSubmit: DOMAttributes<HTMLFormElement>["onSubmit"];
  ruleDefinitions?: Record<keyof T, UseControllerProps<T, K>["rules"]>;
  control?: UseControllerProps<T, K>["control"];
};

const Form = <
  T extends FieldValues = FieldValues,
  K extends FieldPath<T> = FieldPath<T>
>({
  children,
  onSubmit,
  ruleDefinitions,
  control,
  ...props // form(html tag)에 대한 속성들
}: React.PropsWithChildren<
  TForm<T, K> & React.FormHTMLAttributes<HTMLFormElement>
>) => {
  return (
    <form onSubmit={onSubmit} {...props}>
      {React.Children.map(children, (child) => {
        if (!child) return null;
        if (!React.isValidElement(child)) return null;

        return child.props.name ? (
          <Controller
            control={control}
            name={child.props.name}
            rules={ruleDefinitions?.[child.props.name]}
            render={({ field }) => {
              return React.cloneElement(child, { ...field, ...child.props });
            }}
          />
        ) : (
          child
        );
      })}
    </form>
  );
};

export default Form;
