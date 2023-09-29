"use client";
import React, { useState, useEffect } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { TableData } from "./table";
import { Sidebar } from "../components/sidebar";
import axios from "axios";
import { api, baseURL } from "../pages/api";
import { ArrowLeft } from "lucide-react";
import useSWR from "swr";

const Page = () => {
  const [madal, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [infoError, setInfoError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get("/karykarta");
      console.log("DSfds", response.config);
      seturl(response.config.url)
      setData(response.data.data);
      seturl(response.config.url)
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setInfoError(error.code);
      setLoading(false);
      console.log(infoError);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetcher = (...args: any) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`${baseURL}/karykarta/previous`, fetcher);
  console.log(data)
  console.log(infoError);
  return (
    <>
      <div className="w-[100vw] fixed z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="w-[80vw] relative top-10 left-64">
          {loading ? (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          ) : infoError ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <div className="text-center">
                <p className="text-base font-semibold text-black">404</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
                  Data cannot load !!!!
                </h1>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Sorry, we could not fetch data at this moment
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <h1 className="text-2xl font-extrabold mt-10">
                कार्यकर्ता विवरण
                </h1>
              </div>
              {/* <tr className="border-2 border-gray-500">
              {/* <tr className="border-2 border-gray-500">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
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
              </tr> */}
              <form className="w-full text-center">
              <select
                    name="Religion"
                    id="Religion"
                    className="w-auto  mx-5 my-2  bg-black text-white p-2  mb-4 border rounded-lg"
                  >
                    <option value="hindu">Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="christian">Skih</option>
                    <option value="christian">Jain</option>
                    <option value="christian">Jews</option>
                    <option value="other">Other</option>
                  </select>
                  <select className="w-auto mx-5  bg-black text-white p-2 mb-4 border rounded-lg">
                    <option value="Gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <select className="w-auto mx-5  bg-black text-white p-2 mb-4 border rounded-lg">
                    <option value="PreviousParty">Previous Party</option>
                    
                    <option value="{{info.name}}"></option>
                    
                  </select>
                  <select className="w-auto mx-5  bg-black text-white p-2 mb-4 border rounded-lg">
                    <option value="PreviousParty">Mundal</option>
                    
                    <option value="{{info.name}}"></option>
                    
                  </select>
                  <select className="w-auto mx-5  bg-black text-white p-2 mb-4 border rounded-lg">
                    <option value="PreviousParty"></option>
                    
                    <option value="{{info.name}}"></option>
                    
                  </select>
              </form>
              <TableData data={madal} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
