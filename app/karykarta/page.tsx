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
import { useRouter } from "next/navigation";
import Spinner from "../components/spinner";
import Oops from "../components/error";

const Page = () => {
  const [madal, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [infoError, setInfoError] = useState(null);
  const [url, seturl] = useState("/karykarta");
  const [token, setToken] = useState(true);
  const router = useRouter();
  const fetchData = async () => {
    try {
      const response = await api.get(url);
      console.log("DSfds", response.data.data);
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
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    } else {
      setToken(false);
    }
    fetchData();
  }, [url]);
  const fetcher = (...args: any) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${baseURL}/karykarta/previous`,
    fetcher
  );
  console.log(data);

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    const objectToQueryString = (obj: Record<string, string>) => {
      const keyValuePairs: string[] = [];
      for (const key in obj) {
        if (obj[key] && obj[key] !== "None") {
          // Exclude keys with value "none"
          keyValuePairs.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
          );
        }
      }
      console.log(keyValuePairs);
      return keyValuePairs.join("&&");
    };

    // Construct the query string
    const queryString: string = objectToQueryString(data);
    // Construct the final URL
    const baseURL: string = "/karykarta"; // Replace with your base URL
    const finalURL: string = `${baseURL}${
      queryString ? `?${queryString}` : ""
    }`;
    seturl(finalURL);

    // Use finalURL as needed
    console.log(finalURL);
  };
  if (token) {
    return <div>authenticating</div>;
  }

  if (error) return <Oops></Oops>;
  if (isLoading) return <Spinner></Spinner>;
  console.log(data.data);
  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-[80vw] relative top-10">
          {loading ? (
            <div className="text-center">
              <p>
                <Spinner></Spinner>
              </p>
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
            <div className=" w-[100vw] lg:w-auto">
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
                      className="w-auto mx-5 my-2 bg-orange-600 text-white p-2 mb-4 border rounded-lg"
                    >
                      <option value="None">Category</option>
                      <option value="General">General</option>
                      <option value="Other Backward Class">
                        Other Backward Class (O.B.C)
                      </option>
                      <option value="Scheduled Castes">
                        Scheduled Castes (S.C)
                      </option>
                      <option value="Scheduled Tribes">
                        Scheduled Tribes (S.T)
                      </option>
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
                      className="w-auto mx-5 bg-orange-600 text-white p-2 mb-4 border rounded-lg"
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
                        className="w-auto mx-5 bg-orange-600 text-white p-2 mb-4 border rounded-lg"
                      >
                        <option value="None">Choose Party</option>
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
                      className="w-auto mx-5 bg-orange-600 text-white p-2 mb-4 border rounded-lg"
                    >
                      <option value="None">Mundal Select</option>
                      {data.data.info.map((info: any) => (
                        <option key={info.id} value={info.id}>
                          {info.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                <Controller
                  name="role"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-auto mx-5 my-2 bg-orange-600 text-white p-2 mb-4 border rounded-lg"
                    >
                      <option value="None">Select role</option>
                      <option value="karyakarta">karyakarta</option>
                      <option value="adhyaksha">adhyaksha</option>
                      <option value="koshadhyaksha">koshadhyaksha</option>
                      <option value="mahamantri">mahamantri</option>
                      <option value="mantri">mantri</option>
                      <option value="upaadhyaksha">upaadhyaksha</option>
                    </select>
                  )}
                />
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
              <div className="w-[90vw] h-[90vh] overflow-x-scroll">
                <div className="">
                  {/* <h1 className="text-2xl font-extrabold mt-10">
                  Mundal Master
                </h1> */}
                  <TableData data={madal} url={url} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
