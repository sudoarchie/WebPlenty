import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { api } from "../pages/api";
import toast, { Toaster } from "react-hot-toast";
export function TableData({ data }: any) {
  console.log(data);
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
  return (
    <>
      <div>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          PDF
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          Excel
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          Add new karyakarta{" "}
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-800">
        <thead>
          <tr className="border-2 border-gray-500">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mobile Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date of Birth
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Religion
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Previous Party
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mundal ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Edit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Delete
              Delete
            </th>
          </tr>
          <tr className="border-2 border-gray-500">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <select name="Religion" id="Religion" className="w-full p-2 mb-4 border rounded-md">
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="christian">Skih</option>
                <option value="christian">Jain</option>
                <option value="christian">Jews</option>
                <option value="other">Other</option>
              </select>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <select
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="hindu">Male</option>
        <option value="muslim">Female</option>
        <option value="muslim">Other</option>
      </select>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Previous Party
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mundal ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Edit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-800">
          {data.map((info: any) => (
            <tr key={info.id}>
              <td className="px-6 py-4 whitespace-nowrap text-xs">{info.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.address}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.mobileNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.dob}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.religion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.gender}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.previousParty ? info.previousParty : "None"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.mundal.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-2 border-red-300">
                <button>
                  <Pencil className="h-5 w-5" aria-hidden="true"></Pencil>
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-2 border-red-300">
                <button onClick={() => onClickDelete(info.id)}>
                  <Trash2 className="h-5 w-5" aria-hidden="true"></Trash2>
                </button>
              </td>
              <Toaster />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
