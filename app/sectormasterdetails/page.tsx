"use client";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import toast, { Toaster } from "react-hot-toast";
import { NavbarLogout } from "../components/navbarlogout";
import { useEffect, useState } from "react";
import api from "../pages/api";
import { useSearchParams } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Spinner from "../components/spinner";
import Oops from "../components/error";

interface Karyakarta {
  id: string;
  name: string;
}

interface FormValues {
  sanyojak: string;
  prabhari: string;
}
export default function Page() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [sectorId, setSectorId] = useState();
  const [karyakarta, setKarykartaData] = useState();
  const searchParams = useSearchParams();
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle form submission here
    console.log(data);
    api
      .post(`/sector/add/`, {
        ...data,
        sector: sectorId,
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
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      console.log(dataParam);
      setSectorId(JSON.parse(dataParam));
      api
        .get(`/sector/${JSON.parse(dataParam)}`)
        .then((info) => {
          console.log(info.data.data);
          api.get(
            `/karykarta?mundalId=${info.data.data.mundalId}&&role=karyakarta`,
          )
            .then((i_) => {
              console.log(i_.data.data.length);
              setKarykartaData(i_.data.data);
            }).catch((error) => {
              setError(error);
            });
          setLoad(false);
          setData(info.data.data[0]);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [searchParams]);

  function onClickDelete(id: number) {
    const del = api
      .put(`karykarta/${id}`, {
        role: "karyakarta",
        sectorId: null,
      })
      .then((response) => {
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
        console.log(error.response.data.message);
      });
    console.log(del);
  }
  if (load) return <div><Spinner/></div>;
  if (error) return <div><Oops></Oops></div>;
  return (
    <>
      <div className="w-[100vw] z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="text-2xl font-extrabold mt-10">Sector Name</h1>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sr.No.
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.karykarta && data.karykarta.length > 0 &&
                  data.karykarta.map((info: any, index: any) => (
                    <tr
                      key={info.id}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{info.name}</td>
                      <td className="px-6 py-4">{info.role}</td>
                      <td className="px-6 py-4">
                        <Link
                          href={{
                            pathname: "../karykartaformedit",
                            query: {
                              data: JSON.stringify(info),
                            },
                          }}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Update
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => onClickDelete(info.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <hr className="my-10" />

          <div className="flex flex-wrap">
            {data.karykarta && data.karykarta.length > 0 && (
                data.karykarta.length === 0 ||
                data.karykarta.every((karykarta) =>
                  karykarta.role !== "shaktikendraSanyojak"
                )
              )
              ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-[300px] mx-auto mt-8 p-10 bg-gray-300 rounded-md"
                >
                  <label className="block mb-2 font-bold text-gray-700">
                    Select sanyojak
                  </label>
                  <Controller
                    name="sanyojak"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full p-2 mb-4 border rounded-md"
                      >
                        {karyakarta &&
                          karyakarta.map((karyakarta) => (
                            <option key={karyakarta.id} value={karyakarta.id}>
                              {karyakarta.name}
                            </option>
                          ))}
                      </select>
                    )}
                  />

                  <button
                    type="submit"
                    className="mt-4 p-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                  >
                    Submit
                  </button>
                  <Toaster />
                </form>
              )
              : null}
            {data.karykarta && data.karykarta.length > 0  && (
                data.karykarta.length === 0 ||
                data.karykarta.every((karykarta) =>
                  karykarta.role !== "shaktikendraprabhari"
                )
              )
              ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-[299px] mx-auto mt-8 p-10 bg-gray-300 rounded-md"
                >
                  <label className="block mb-3 font-bold text-gray-700">
                    Select prabhari
                  </label>
                  <Controller
                    name="prabhari"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full p-3 mb-4 border rounded-md"
                      >
                        {karyakarta &&
                          karyakarta.map((karyakarta) => (
                            <option key={karyakarta.id} value={karyakarta.id}>
                              {karyakarta.name}
                            </option>
                          ))}
                      </select>
                    )}
                  />

                  <button
                    type="submit"
                    className="mt-5 p-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                  >
                    Submit
                  </button>
                  <Toaster />
                </form>
              )
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
