import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

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
          type={textFieldProps?.type}
          onChange={onChange}
          ref={ref}
          value={value}
          size={textFieldProps?.size}
          label={textFieldProps?.label}
          variant="outlined"
          name={textFieldProps?.name}
          className={textFieldProps?.className}
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
          // error={!!error}
          // helperText={!!error && error.message}
        />
      )}
    />
  );
};

export default TextField;
