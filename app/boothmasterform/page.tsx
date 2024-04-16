"use client";
import { useEffect, useState } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { useForm, Controller } from "react-hook-form";
import { api } from "../pages/api";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../components/spinner";
import Oops from "../components/error";
function Page() {
  const { handleSubmit, control, watch } = useForm();
  const selectedSector = watch("villageId");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataForKarykarta, setdataForKarykarta] = useState([]);
  const [secondLoader, setsecondLoader] = useState(true);
  const [secondError, setsecondError] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    return api
    .post("/poolingBooth", {
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
      }, 1000);
    })
    .catch(function (error) {
      console.log(error)
      toast.error(error.response.data.message);
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await api.get("/village");
        setData(response.data.data);
        setLoading(false);
      } catch (err:any) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(id: any) {
      api
        .get(`/village/${id}`)
        .then((response) => {
          console.log("id",response)
          api
            .get(
              `/karykarta?mundalId=${response.data.data[0].mundalId}&&role=karyakarta`
            )
            .then((response) => {
              console.log(response)
              setdataForKarykarta(response.data.data);
              setsecondLoader(false);
              setLoading(false);
            })
            .catch((err) => {
              setsecondError(err);
              setsecondLoader(false);
              setLoading(false);
            });
        })
        .catch((err) => {
          setsecondError(err);
          setsecondLoader(false);
          setLoading(false);
        });
    }
    if (selectedSector) {
      fetchData(selectedSector);
    }
  }, [selectedSector]);

  if (secondError) return <div><Oops></Oops></div>;
  if (error) return <div><Oops></Oops></div>;
  if (loading) return <div><Spinner></Spinner></div>;
  // if ( secondLoader) return <div>LOading ......</div>

  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl">Booth Master Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Booth Name
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
                      placeholder="Booth Name"
                    />
                  )}
                />
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Village Name
                </label>
                <Controller
                  name="villageId"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="" disabled>
                        Select a Village
                      </option>
                      {data.map((info: any) => (
                        <option key={info.id} value={info.id}>
                          {info.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                adhyaksha
                </label>
                <Controller
                  name="karykartadId"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      disabled={!selectedSector}
                    >
                      <option value="" disabled>
                        Select a Karykarta
                      </option>
                      {dataForKarykarta.map((info: any) => (
                        <option key={info.id} value={info.id}>
                          {info.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>
            <button
              type="submit"
              className="appearance-none block w-full bg-orange-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              disabled={!selectedSector}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Page;
