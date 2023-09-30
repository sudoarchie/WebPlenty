'use client'
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { useForm, Controller } from "react-hook-form";
import { api } from "../pages/api";
import toast, { Toaster } from "react-hot-toast";
function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    return api
      .post("/mundal", {
        ...data,
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
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <Toaster/>
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
                  defaultValue=""
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
