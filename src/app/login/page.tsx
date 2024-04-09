"use client";

import Form from "@/components/atoms/Form";
import TextField from "@/components/atoms/TextField";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/atoms/Button";
import { useFormState } from "react-dom";
import { authenticate } from "@/lib/actions";
import SocialLogin from "@/components/molecules/SocialLogin";

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
    <div className="w-full flex items-center flex-col">
      <div className="w-[350px] border border-solid rounded-lg">
        <div className="px-5 pt-5 pb-3">
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
        </div>

        <div className="w-full border-t-[1px] border-gray-300 border-solid mt-2">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
