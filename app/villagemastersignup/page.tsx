'use client'
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { useForm, Controller } from "react-hook-form";
import { api, baseURL } from "../pages/api";
import useSWR from "swr";
import toast, { Toaster } from "react-hot-toast";

function Page() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    return api
      .post("/village", {
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
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  }

  function getAuthToken() {
    return localStorage.getItem('accessToken');
  }

  const fetcher = (url: string) => fetch(url, {
    headers: {
      authorization: `${getAuthToken()}`,
    },
  }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`${baseURL}/sector`, fetcher);

  return (
    <>
      <div className="w-[100vw] z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <Toaster />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl">Village Master Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Village Name
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
                      placeholder="village name"
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    This field is required
                  </p>
                )}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Sector
                </label>
                <select
                  {...register("sectorId", { required: true })}
                  className="w-full p-2 mb-4 border rounded-md"
                >
                  {!isLoading ? (
                    data && data.data ? (
                      data.data.map((info: any) => (
                        <option value={info.id} key={info.id}>
                          {info.name}
                        </option>
                      ))
                    ) : (
                      <option value="" key="no-data">
                        No data available
                      </option>
                    )
                  ) : (
                    <option value="" key="loading">
                      Loading...
                    </option>
                  )}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...handleSubmit}
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
