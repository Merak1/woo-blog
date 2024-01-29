"use client";
import { FieldValues, useForm } from "react-hook-form";
import Radio from "../inputs/Radio";
import { useState } from "react";
import { useWooBlog } from "@/hooks/useWooBlog";

const SearchBar = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    entries,
    handleEntrySearch,
    searchQuery,
    searchByType,
    entrySearchResult,
  } = useWooBlog();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchBy: "title",
      query: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("💙data from searchbar 💙", data);
    handleEntrySearch(data);
  };
  return (
    <div className=" flex flex-col w-3/6 ml-auto mr-5 ">
      <input
        {...register("query", { required: true })}
        type="text"
        autoComplete="off"
        placeholder="Search"
        required={true}
        className="p-2 border-gray-300 rounded-1-md focus:outline-none 
            focus:border-[0.5px] focus:border-slate-500 border-2 rounded-md 
            "
      />
      <div className="flex flex-row w-full">
        <Radio
          id="searchBy"
          label="titulo"
          value="title"
          disabled={isLoading}
          register={register}
          required
          errors={errors}
        />
        <Radio
          id="searchBy"
          label="autor"
          value="user"
          disabled={isLoading}
          register={register}
          required
          errors={errors}
        />
        <Radio
          id="searchBy"
          label="contenido"
          value="content"
          disabled={isLoading}
          register={register}
          required
          errors={errors}
        />
      </div>
      <button
        className="bg-slate-700 opacity-100 hover:opacity-80
         text-white p-2 rounded-md"
        onClick={handleSubmit(onSubmit)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
