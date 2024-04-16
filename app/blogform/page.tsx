"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navbar } from "../components/navbar";
import toast from "react-hot-toast";
import api from "../pages/api";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";

interface IFormInput {
  title: string;
  content: string;
  image: FileList | null; // Change 'any' to 'FileList'
}

export default function Page() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files;

    if (selectedImage && selectedImage.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImagePreview(e.target.result as string);
      };
      reader.readAsDataURL(selectedImage[0]);
    } else {
      setImagePreview(null);
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    const formData = new FormData();

    formData.append("content", data.content);
    formData.append("title", data.title);
    if (data.image) {
      formData.append("image", data.image[0]);
    }

    return api
      .post("/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        toast.success(response.data.message, {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <NavbarLogout></NavbarLogout>
      <div className="flex">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">Blog</h1>
          <hr></hr>
          <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center">
              <div className="border border-dashed border-gray-500 relative">
                <input
                  type="file"
                  multiple
                  className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50 rounded-md"
                  {...register("image")}
                  onChange={handleImageChange}
                />

                <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                  <h4>
                    Drop files anywhere to upload
                    <br />
                    or
                  </h4>
                  <p className="">Select Files</p>
                </div>
              </div>
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="max-h-40 mx-auto mt-4 rounded-md"
              />
            )}
            <div>
              <input
                type="text"
                className="h-[10vh] w-[80vw] my-10 p-5 border-2 border-black rounded-md focus:border-orange-600 focus:outline-none"
                placeholder="heading"
                {...register("title", { required: "Title is required" })}
              />
            </div>
            <div>
              <textarea
                placeholder="main content"
                {...register("content", { required: "Content is required" })}
                className="h-[50vh] w-[80vw] my-3 p-5 border-2 border-black rounded-md focus:border-orange-600 focus:outline-none"
              />
            </div>
            <input
              type="submit"
              className="border-2 border-black w-[80vw] h-10"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
