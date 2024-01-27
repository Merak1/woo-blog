"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import { useState } from "react";
import TextArea from "../inputs/TextArea";
import Button from "../inputs/Button";

const CreateNewEntry = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      user: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Product data ", data);
  };

  return (
    <div>
      <Input
        id="title"
        label="title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="user"
        label="user"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextArea
        id="content"
        label="content"
        disabled={isLoading}
        register={register}
        errors={errors}
      />

      <Button
        label={isLoading ? "Loading" : "Post"}
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default CreateNewEntry;
