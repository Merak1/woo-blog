"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import { useState } from "react";
import TextArea from "../inputs/TextArea";
import Button from "../inputs/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useWooBlog } from "@/hooks/useWooBlog";

const CreateNewEntry = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleRefreshEntries } = useWooBlog();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      user: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    await axios
      .post("/api/blog", data)
      .then(() => {
        toast.success("Product created successfully");
      })
      .catch((error: any) => {
        toast.error("Something went wrong please try again", error);
      })
      .finally(() => {
        reset();
        router.refresh();
        handleRefreshEntries();
        setIsLoading(false);
      });
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
        required
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
