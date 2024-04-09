"use client";
import {
  Controller,
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

type MuiProps = {
  textFieldProps?: TextFieldProps;
};

const TextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  textFieldProps, // textField를 위한 prop들, mui에서 import 해온다.
  ...props
}: MuiProps & UseControllerProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <MuiTextField
          onChange={onChange}
          ref={ref}
          value={value}
          label={textFieldProps?.label}
          variant="outlined"
          name={textFieldProps?.name}
          className="mb-2"
          // error={!!error}
          // helperText={!!error && error.message}
        />
      )}
    />
  );
};

export default TextField;
