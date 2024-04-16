"use client";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import toast, { Toaster } from "react-hot-toast";
import { NavbarLogout } from "../components/navbarlogout";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../pages/api";
import Spinner from "../components/spinner";

import { v4 as uuidv4 } from "uuid";
import Oops from "../components/error";

export default function Page() {
  // Replace with your actual data
  const [load, setLoad] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      console.log(dataParam);
      api
        .get(`/mundal/${JSON.parse(dataParam)}`)
        .then((info) => {
          setLoad(false); // Move this inside the promise
          setData(info.data.data);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [searchParams]);

  if (load) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }
  if (error) return <div>Error</div>;
  if (load) return <div><Spinner></Spinner></div>;
  if (error) return <div><Oops></Oops></div>;

  function onClickDelete(id: number) {
    const del = api
      .delete(`karykarta/${id}`)
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
   function download(type: string) {
    console.log(type);
    const apiUrl = `mundal/${data.mundal.id}?download=true&type=${type}`;
    api
      .get(apiUrl, { responseType: "blob" })
      .then((response) => {
        const disposition = response.headers["content-disposition"];
        let filename = `bjp__mandal__${uuidv4()}`;

        if (disposition && disposition.indexOf("attachment") !== -1) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
            disposition,
          );
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, "");
          }
        }

        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="text-2xl font-extrabold mt-10">Mundal Name</h1>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => download("pdf")}
              className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400 text-sm"
            >
              PDF
            </button>
            <button
              onClick={() => download("Excel")}
              className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400 text-sm"
            >
              Excel
            </button>
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
                {data.karyakarta.map((info: any, index: number) => (
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
                          pathname: "../mundalchangerole/",
                          query: {
                            data: JSON.stringify(info),
                          },
                        }}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Change Role
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
                <Toaster />
              </tbody>
            </table>
          </div>

          <hr className="my-10"></hr>
        </div>
      </div>
    </>
  );
}
