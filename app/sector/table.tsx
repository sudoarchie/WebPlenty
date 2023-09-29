import React from "react";
import { Pencil, Trash2 } from "lucide-react";

export function TableData({ data }: any) {
  return (
    <>
      <div>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-black">
          PDF
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-black">
          Excel
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-black">
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
              Delet
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
                {info.previousParty}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.mundalId}
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
                <button>
                  <Trash2 className="h-5 w-5" aria-hidden="true"></Trash2>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
