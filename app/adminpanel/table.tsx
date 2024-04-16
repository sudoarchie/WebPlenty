import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../pages/api";
import Spinner from "../components/spinner";
import Oops from "../components/error";

export function Table() {
  const [data, setData] = useState([]);
  const [error, setError] = useState<any>(null); // Changed to null to represent no error
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await api.get("/user");
      setData(response.data.data);
      setLoading(false);
    } catch (error:any) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div><Oops></Oops></div>;

  if (loading) return <div><Spinner></Spinner></div>;

  function del(id: any) {
    if (window.confirm("क्या आप एडमिन को हटाना चाहते हैं?")) {
      api
        .delete(`user/${id}`)
        .then((response) => {
          toast(response.data.message, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          fetchData(); // Reload data after successful deletion
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          <Link href="../adminpanelsignup">Add New Admin</Link>
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
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Name
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
            {data&&data.map((info:any , index:any) => (
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
                <td className="px-6 py-4">{info.email}</td>
                <td className="px-6 py-4">{info.name}</td>
                <td className="px-6 py-4">
                  <Link
                    href={{
                      pathname: "../adminpaneledit",
                      query: {
                        data: JSON.stringify(info),
                      },
                    }}
                  >
                    Update
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
        <Toaster />
      </div>
    </>
  );
}
