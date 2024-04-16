"use client";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useEffect , useState} from "react";
import { api } from "../pages/api";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Page() {
  const [info, setInfo] = useState(null); // Specify the type for `info` or initialize it as null
  const [load, setLoad] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      console.log(JSON.parse(dataParam));
      setInfo(JSON.parse(dataParam));
      setLoad(false);
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(); // You need to specify the type for `FormValue`.

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    return api
      .put(`/village/${info ? info.id : ""}`, {
        ...data,
        sectorId: info.sector.id,
      })
      .then(function (response) {
        router.push("/villagemaster");
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

  async function Postvillage(data) {
    try {
      const response = await api.post("/village", data);
      // Handle the response if necessary
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  }

  if (load) return <div>Load...</div>;

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
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl">Village Master Edit Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Village Name
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
                      placeholder="village name"
                    />
                  )}
                />
                {errors.name && (
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
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
