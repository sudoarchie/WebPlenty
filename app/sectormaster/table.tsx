import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../pages/api";

export function Table({ data }: any) {
  function del(id: number) {
    api
      .delete(`/sector/${id}`)
      .then((info) => {
        toast(info.data.message, {
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
      .catch((error) => {
        console.log("dd");
      });
  }
  return (
    <>
      <div>
        {/* <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          PDF
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          Excel
        </button> */}
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          <Link
            className="w-full h-full text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="../sectormasterform"
          >
            Add New SectorMaster
          </Link>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Toaster/>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr.No
              </th>
              <th scope="col" className="px-6 py-3">
                Sector Id
              </th>
              <th scope="col" className="px-6 py-3">
                Sector Master
              </th>
              <th scope="col" className="px-6 py-3">
                SECTOR SANYOJAK
              </th>
              <th scope="col" className="px-6 py-3">
                SECTOR PRABHARI
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
            {data.map((info: any, index: number) => (
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
                <td className="px-6 py-4">{info.id}</td>
                <td className="px-6 py-4">{info.name}</td>
                <td className="px-6 py-4">
                  {info.karykarta.some(
                    (karykarta: any) =>
                      karykarta.role === "shaktikendraSanyojak"
                  )
                    ? info.karykarta.find(
                        (karykarta: any) =>
                          karykarta.role === "shaktikendraSanyojak"
                      ).name
                    : "None"}
                </td>
                <td className="px-6 py-4">
                  {info.karykarta.some(
                    (karykarta: any) =>
                      karykarta.role === "shaktikendraprabhari"
                  )
                    ? info.karykarta.find(
                        (karykarta: any) =>
                          karykarta.role === "shaktikendraprabhari"
                      ).name
                    : "None"}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href="../sectormasterformedit"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => del(info.id)}
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
    </>
  );
}
