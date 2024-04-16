import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../pages/api";

export function Table({ data }: any) {
  function onClickDelete(id: number) {
    const del = api
      .delete(`poolingBooth/${id}`)
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
        }, 500);
      }) // Close the then block here
      .catch((error) => {
        // Handle errors here if needed
        console.error(error);
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
            href="../boothmasterform"
          >
            Add New BoothMaster
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
                Booth name
              </th>
              <th scope="col" className="px-6 py-3">
                Sector id
              </th>
              <th scope="col" className="px-6 py-3">
                Sector Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Karyakarta
              </th>
              <th scope="col" className="px-6 py-3">
                Open
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
                <td className="px-6 py-4">{info.name}</td>
                <td className="px-6 py-4">
                  {info.villageId !== null ? info.villageId : "None"}
                </td>
                <td className="px-6 py-4">
                  {info.village.name !== null ? info.village.name : "None"}
                </td>
                <td className="px-6 py-4">
                  {info.karykarta !== null
                    ? info.karykarta.length
                    : "No data available"}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={{
                      pathname: "../boothmasterdetails",
                      query: {
                        data: JSON.stringify(info),
                      },
                    }}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Open
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href={{
                      pathname: "../boothmasterformedit",
                      query: {
                        data: JSON.stringify({
                          id: info.id,
                          name: info.name,
                        }),
                      },
                    }}
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
    </>
  );
}
