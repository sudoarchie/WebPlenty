'use client'
import React, { useState, useEffect } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { TableData } from "./table";
import { Sidebar } from "../components/sidebar";
import axios from "axios";
import { api, baseURL } from "../pages/api";

const Page = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get('/karykarta');
      console.log(response.data.data)
      setData(response.data.data);
      setLoading(false);
    } catch (error:any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          ) : error ? (
            <div className="text-center">
              <p>Error: {error}</p>
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
