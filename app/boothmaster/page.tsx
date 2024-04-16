"use client";
import { useEffect, useState } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { Table } from "./table";
import { api } from "../pages/api";
import { useRouter } from "next/navigation";
import Spinner from "../components/spinner";
import Oops from "../components/error";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

function Page() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [url, seturl] = useState("/poolingBooth");
  const [mundal, setMundal] = useState();
  const [village, setVillage] = useState();
  const { handleSubmit, control } = useForm();

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, []);
  async function fetchData() {
    await api
      .get(url)
      .then((info) => {
        api.get("/mundal").then((i_) => {
          api.get("/village").then((_i) => {
            setVillage(_i.data.data)
            setMundal(i_.data.data);
            setData(info.data.data);
            setLoading(false);
          });
        });
      })
      .catch((error) => {
        setError(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, [url]);
  const onSubmit = (data: any) => {
    const objectToQueryString = (obj: Record<string, string>) => {
      const keyValuePairs: string[] = [];
      for (const key in obj) {
        if (obj[key] && obj[key] !== "None") {
          // Exclude keys with value "none"
          keyValuePairs.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`,
          );
        }
      }
      console.log(keyValuePairs);
      return keyValuePairs.join("&");
    };

    // Construct the query string
    const queryString: string = objectToQueryString(data);
    // Construct the final URL
    const baseURL: string = "/poolingBooth"; // Replace with your base URL
    const finalURL: string = `${baseURL}${
      queryString ? `?${queryString}` : ""
    }`;
    seturl(finalURL);

    // Use finalURL as needed
    console.log(finalURL);
  };

  function download(type: string) {
    let apiUrl;
    if (url.indexOf("?") !== -1) {
      apiUrl = `${url}&download=true&type=${type}`;
    } else {
      apiUrl = `${url}?download=true&type=${type}`;
    }
    console.log(apiUrl);
    api
      .get(apiUrl, { responseType: "blob" })
      .then((response) => {
        const disposition = response.headers["content-disposition"];
        let filename = `bjp__sector__${uuidv4()}`;

        if (disposition && disposition.indexOf("attachment") !== -1) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
            disposition,
          );
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, "");
          }
        }

        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  console.log(data);
  if (error) {
    return (
      <div>
        <Oops></Oops>
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="text-2xl font-extrabold mt-10">Booth Master</h1>
          </div>
          <div className="flex justify-center mt-12">
            <div>
              <form
                className="w-full text-center "
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="mundalId"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-auto mx-5  bg-orange-600 text-white p-2 mb-4 border rounded-lg"
                    >
                      <option value="None">Select mundal</option>
                      {mundal &&
                        mundal.map((info) => (
                          <option key={info.id} value={info.id}>{info.name}</option>
                        ))}
                    </select>
                  )}
                />
                <Controller
                  name="villageId"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-auto mx-5  bg-orange-600 text-white p-2 mb-4 border rounded-lg"
                    >
                      <option value="None">Select village</option>
                      {village &&
                        village.map((info) => (
                          <option key={info.id} value={info.id}>{info.name}</option>
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
            </div>
            <div>
              <button
                onClick={() => download("pdf")}
                className="px-4 py-2 border-2 mx-2 rounded-lg border-gray-400 text-sm"
              >
                PDF
              </button>
              <button
                onClick={() => download("Excel")}
                className="px-4 py-2 border-2  mx-2 rounded-lg border-gray-400 text-sm"
              >
                Excel
              </button>
            </div>
          </div>

          <Table data={data}></Table>
        </div>
      </div>
    </>
  );
}
export default Page;
