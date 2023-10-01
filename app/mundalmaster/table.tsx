import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../pages/api";

export function Table({ data }: any) {
  // function onClickDelete(id: number) {
  //   const del = api
  //     .delete(`karykarta/${id}`)
  //     .then((response) => {
  //       toast(response.data.message, {
  //         icon: "👏",
  //         style: {
  //           borderRadius: "10px",
  //           background: "#333",
  //           color: "#fff",
  //         },
  //       });
  //     }) // Close the then block here
  //     .catch((error) => {
  //       // Handle errors here if needed
  //       console.error(error);
  //     });
  // }

  return (
    <>
      <div className="flex justify-center">
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          PDF
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          Excel
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          <Link
            className="w-full h-full text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="../mundalmasterform"
          >
            Add New Mundal
          </Link>
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
                Mundal Id
              </th>
              <th scope="col" className="px-6 py-3">
                Mundal
              </th>

              <th scope="col" className="px-6 py-3">
                Total Sectors
              </th>
              <th scope="col" className="px-6 py-3">
                Total Karykarta
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
                  {info.sector != null ? info.sector.length : "0"}
                </td>
                <td className="px-6 py-4">
                  {info.karyakarta != null ? info.karyakarta.length : "0"}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href="../mundalmasterformedit"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
