"use client";
import React, { useState, useEffect } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { TableData } from "./table";
import { Sidebar } from "../components/sidebar";
import axios from "axios";
import { api, baseURL } from "../pages/api";
import { ArrowLeft } from 'lucide-react'

const Page = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [infoError, setInfoError] = useState(null); // Corrected variable name

  const fetchData = async () => {
    try {
      const response = await api.get("/karykarta");
      console.log("DSfds", response.data.data);
      setData(response.data.data);
      setLoading(false);
    } catch (error: any) {
      // Removed ":any" type annotation
      console.log(error);
      setInfoError(error.code); // Corrected function name
      setLoading(false);
      console.log(infoError); // You can remove this line as it may not show the updated state immediately
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
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
          ) : infoError ? ( // Corrected variable name
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
                  केतकी सिंह विधायक 362 विधान सभा बांसडीह
                </h1>
              </div>
              <TableData data={data} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
