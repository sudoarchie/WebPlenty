"use client";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { Controller, useForm } from "react-hook-form";
import { api } from "../pages/api";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [info, setInfo] = useState();
  const [load, setLoad] = useState(true);
  const searchParams = useSearchParams();
  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      console.log(dataParam);
      setInfo(JSON.parse(dataParam));
      setLoad(false);
    }
  }, []);

  const onSubmit = (data: any) => {
    return api
      .put(`mundal/name/${info.id}`, {
        name:data.name,

      })
      .then(function (response) {
        toast(response.data.message, {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };
  if (load) return <div>loading ....</div>;
  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <Toaster />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl">Mundal Master Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Mundal Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue={info.name}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Jane"
                    />
                  )}
                />
                {errors.mundalName && (
                  <p className="text-red-500 text-xs italic">
                    This field is required
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="appearance-none block w-full bg-orange-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Page;
