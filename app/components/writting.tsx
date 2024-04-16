'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "../pages/api";
import Link from "next/link";
import Oops from "./error";
import Spinner from "./spinner";

export function Writting() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    await api
      .get("/blog")
      .then((info) => {
        setData(info.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div><Oops></Oops></div>;
  if (loading) return <div><Spinner/></div>;

  return (
    <>
      <div className="mx-auto w-full max-w-7xl items-center space-y-4 px-2 py-10 md:space-y-0 flex flex-wrap gap-5 justify-center">
        {data.map((info, index) => (
          <div key={index} className="w-[300px] h-[300px] overflow-hidden">
            <div className="relative aspect-[16/9] h-full  rounded-md md:aspect-auto ">
              <Image
                src={info.image.startsWith("https://webplentybackend.s3.ap-south-1.amazonaws.com/")
                  ? info.image
                  : info.image.replace(
                      "https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/",
                      "https://webplentybackend.s3.ap-south-1.amazonaws.com/"
                    )}
                    width={300}
                    height={100}


                alt="Kanya Sumangla scheme"
                className=" object-cover object-center"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{info.title}</h1>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  <Link href={{ pathname: "../blog", query: { data: JSON.stringify(info) } }}>
                    Read More →
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
