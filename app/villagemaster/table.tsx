import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../pages/api";
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from "../components/spinner";
import Oops from "../components/error";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export function Table() {
  const [data, setData] = useState<Author[]>();
  const [error, setError] = useState(null); // Changed to null to represent no error
  const [loading, setLoading] = useState(true);
  const [url, seturl] = useState("/village");
  const [mundal, setMundal] = useState();
  const [village, setVillage] = useState();
  const { handleSubmit, control } = useForm();

  async function fetchData() {
    await api
      .get(url)
      .then((info) => {
        api.get("/mundal").then((i_) => {
          api.get("/sector").then((_i) => {
            setVillage(_i.data.data);
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
    const baseURL: string = "/village"; // Replace with your base URL
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
        let filename = `bjp__village__${uuidv4()}`;

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

  function del(id: number) {
    if (window.confirm("क्या आप एडमिन को हटाना चाहते हैं?")) {
      api
        .delete(`village/${id}`)
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
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  return (
    <>
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
              name="sectorId"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className="w-auto mx-5  bg-orange-600 text-white p-2 mb-4 border rounded-lg"
                >
                  <option value="None">Select sector</option>
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

      <div className="flex justify-center">
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          <Link href="../villagemastersignup">Add New village</Link>
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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sector
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
            {data
              ? data.map((info: Author, index: number) => (
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
                  <td className="px-6 py-4">{info.name}</td>
                  <td className="px-6 py-4">{info.sector ? info.sector.name : 'N/A'}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={{
                        pathname: "../villagemasteredit",
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
              ))
              : (
                <div>
                  <Spinner></Spinner>
                </div>
              )}
          </tbody>
        </table>
        <Toaster />
      </div>
    </>
  );
}

interface Author {
  id: number;
  name: string;
  sector: Sector;
}

interface Sector {
  id: number;
  mundalId: number;
  name: string;
}
