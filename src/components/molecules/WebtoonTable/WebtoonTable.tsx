"use client";

import { CardView } from "@/components/atoms/CardView";
import Form from "@/components/atoms/Form";
import TextField from "@/components/atoms/TextField";
import { FormProvider, useForm } from "react-hook-form";

const WebtoonTable = () => {
  const methods = useForm<String>();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <CardView>
      <FormProvider {...methods}>
        <Form
          onSubmit={methods.handleSubmit(onSubmit)}
          control={methods.control}
          className="flex justify-between items-center"
        >
          <TextField
            name="search"
            textFieldProps={{
              label: "search",
              size: "small",
            }}
          />
        </Form>
      </FormProvider>

      <ul className="min-h-[650px]">
        <li></li>
      </ul>
    </CardView>
  );
};

export default WebtoonTable;
