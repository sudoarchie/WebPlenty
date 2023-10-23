'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import { Navbar } from "../components/navbar";

interface IFormInput {
  title: string; // Change "String" to "string" for lowercase data type
  content: string;
}

export default function Page() {
  const { register, handleSubmit } = useForm<IFormInput>();
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data); // Log the form data
  };

  return (
    <>
      <Navbar></Navbar>
      <h1>Blog</h1>
      <div>image upload feature</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="heading"
            {...register("title")}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="main content"
            {...register("content")}
          ></input>
        </div>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
