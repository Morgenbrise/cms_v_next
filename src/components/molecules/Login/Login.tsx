"use client";

import { useFormState } from "react-dom";
import { authenticate } from "@/lib/actions";
import Form from "@/components/atoms/Form";
import TextField from "@/components/atoms/TextField";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/atoms/Button";

type TLogin = {
  id: string;
  password: string;
};

const Login = () => {
  const [errorMsg, dispatch] = useFormState(authenticate, undefined);

  const methods = useForm<TLogin>({
    defaultValues: { id: "" },
  });

  function onSubmit(data: any) {
    dispatch(data);
  }

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={methods.handleSubmit(onSubmit)}
        control={methods.control}
        className="flex flex-col"
      >
        <TextField name="id" textFieldProps={{ label: "id" }} />
        <TextField
          name="password"
          textFieldProps={{ type: "password", label: "password" }}
        />
        <Button type="submit" variant="contained">
          로그인
        </Button>
      </Form>
    </FormProvider>
  );
};

export default Login;
