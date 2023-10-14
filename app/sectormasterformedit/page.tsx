/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import useSWR from "swr";
import { api } from "../pages/api";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
function page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataForKarykarta, setdataForKarykarta] = useState(null);
  const [secondLoader, setsecondLoader] = useState(true);
  const [secondError, setsecondError] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  function onSubmit(data: any) {
    console.log(data)
    return api
      .post("/sector", {
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
        toast.error(error.response.data.message);
      });
  }
  const selectedMundal = watch("mundalId");
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        await api
          .get("/mundal")
          .then((info) => {
            console.log(info.data.data);
            setData(info.data.data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
          });
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData(id: number) {
      try {
        setLoading(true);
        await api
          .get(`/karykarta?mundalId=${id}&&role=karyakarta`)
          .then((info) => {
            console.log(info.data.data);
            setdataForKarykarta(info.data.data);
            setsecondLoader(false);
            setLoading(false);
          })
          .catch((error) => {
            setsecondError(error);
          });
      } catch (err: any) {
        setsecondError(err);
        setsecondLoader(false);
        setLoading(false);
      }
    }
    if (selectedMundal) {
      fetchData(selectedMundal);
    }
  }, [selectedMundal]);
  console.log(dataForKarykarta);
  if(secondError) return <div>Error fuck us</div>;
  if (error) return <div>error !!!!!</div>;
  if (loading) return <div>Loading !!!</div>;
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
            <h1 className="text-2xl">Sector Master Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Sector Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Jane"
                    />
                  )}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Mundal
                </label>
                <Controller
                  name="mundalId"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="">Select mandal </option>
                      {!loading ? (
                        (data as any).map((info: any) => (
                          <option key={info.id} value={info.id}>
                            {info.name}
                          </option>
                        ))
                      ) : (
                        <div>LOading ......</div>
                      )}
                    </select>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  SECTOR SANYOJAK
                </label>
                <Controller
                  name="sanyojakId"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      disabled={!selectedMundal}
                    >
                      <option value="">Select Karykarta </option>
                      {!secondLoader ? (
                        (dataForKarykarta as any).map((info: any) => (
                          <option key={info.id} value={info.id}>
                            {info.name}
                          </option>
                        ))
                      ) : (
                        <div>LOading ......</div>
                      )}
                    </select>
                  )}
                />
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  SECTOR PRABHARI
                </label>
                <Controller
                  name="prabhariID"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      disabled={!selectedMundal}
                    >
                      <option value="">Select Karykarta </option>
                      {!secondLoader ? (
                        (dataForKarykarta as any).map((info: any) => (
                          <option key={info.id} value={info.id}>
                            {info.name}
                          </option>
                        ))
                      ) : (
                        <div>LOading ......</div>
                      )}
                    </select>
                  )}
                />
              </div>
            </div>
            <button
              className="appearance-none block w-full bg-orange-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="submit"
              disabled={!selectedMundal}
            >
              Submit
            </button>
            <Toaster/>
          </form>
        </div>
      </div>
    </>
  );
}
export default page;
