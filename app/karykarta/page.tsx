"use client";
import React, { useState, useEffect } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { TableData } from "./table";
import { Sidebar } from "../components/sidebar";
import axios from "axios";
import { api, baseURL } from "../pages/api";
import { ArrowLeft } from "lucide-react";
import useSWR from "swr";
import { useForm, Controller } from "react-hook-form";

const Page = () => {
  const [madal, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [infoError, setInfoError] = useState(null);
  const [url, seturl] = useState("/karykarta");

  const fetchData = async () => {
    try {
      const response = await api.get(url);
      console.log("DSfds", response.config);
      seturl(response?.config?.url || "");
      setData(response.data.data);
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
  }, [url]);
  const fetcher = (...args: any) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${baseURL}/karykarta/previous`,
    fetcher
  );
  console.log(data)

  const { handleSubmit, control } = useForm();

  const onSubmit = (data:any) => {
    const objectToQueryString = (obj: Record<string, string>) => {
      const keyValuePairs: string[] = [];
      for (const key in obj) {
        if ( obj[key] && obj[key]!=="None") { // Exclude keys with value "none"
          keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
        }
      }
      console.log(keyValuePairs)
      return keyValuePairs.join('&&');
    };
    
    // Construct the query string
    const queryString: string = objectToQueryString(data );
    // Construct the final URL
    const baseURL: string = '/karykarta'; // Replace with your base URL
    const finalURL: string = `${baseURL}${queryString ? `?${queryString}` : ''}`;
    seturl(finalURL)
    
    // Use finalURL as needed
    console.log(finalURL);
  };

  if (error)
    return (
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
    );
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  console.log(data.data);
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
              <form
                className="w-full text-center mt-12"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="religion"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-auto mx-5 my-2 bg-black text-white p-2 mb-4 border rounded-lg"
                    >
                      <option value="None">Religion select</option>
                      <option value="hindu">Hindu</option>
                      <option value="muslim">Muslim</option>
                      <option value="christian">Christian</option>
                      <option value="sikh">Sikh</option>
                      <option value="jain">Jain</option>
                      <option value="jews">Jews</option>
                      <option value="Other">Other</option>
                    </select>
                  )}
                />
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-auto mx-5 bg-black text-white p-2 mb-4 border rounded-lg"
                    >
                      <option value="None">Gender Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  )}
                />
                {!isLoading && data.data.length !== 0 && (
                  <Controller
                    name="previousParty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-auto mx-5 bg-black text-white p-2 mb-4 border rounded-lg"
                      >
                        <option value="None">
                                Choose Party 
                              </option>
                        {!isLoading ? (
                          data.data.filteredData.map(
                            (info: any, index: string) => (
                              <option key={index} value={info.previousParty}>
                                {info.previousParty}
                              </option>
                            )
                          )
                        ) : (
                          <option value="" key="loading">
                            Loading...
                          </option>
                        )}
                      </select>
                    )}
                  />
                )}
                <Controller
                  name="mundalId"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-auto mx-5 bg-black text-white p-2 mb-4 border rounded-lg"
                    >
                       <option value="None">
                                Mundal Select
                              </option>
                      {data.data.info.map((info: any) => (
                        <option key={info.id} value={info.id}>
                          {info.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
              <TableData data={madal} url={url} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
