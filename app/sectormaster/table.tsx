import React from "react";
import {  Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../pages/api";

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
export function Table() {
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
        <Link
                className="w-full h-full text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../form"
              >
                Add New SectorMaster
              </Link>
          
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-800">
        <thead>
          <tr className="border-2 border-gray-500">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              S.no
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sector
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mandal 
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mandal Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Religion
            </th>
            
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Edit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Delete
            </th>
          </tr>
          
        </thead>
        {data.map((info: any,index:number ) => (
        <tbody className="bg-white divide-y divide-gray-800">
          
            <tr >
              <td className="px-6 py-4 whitespace-nowrap text-xs"></td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
               
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {/* {info.religion} */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {/* {info.gender} */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {/* {info.previousParty ? info.previousParty : "None"} */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {/* {info.mundal.name} */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {/* {info.role} */}
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
          
        </tbody>
        ))}
      </table>
        </>
    );
}