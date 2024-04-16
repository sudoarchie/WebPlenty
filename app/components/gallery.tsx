"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Spinner from "./spinner";
import Oops from "./error";
import api from "../pages/api";

export function Gallery() {
  const [enlargedIndex, setEnlargedIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        api.get("/gallery").then((info) => {
          setApiData(info.data.data); // Assuming the API returns an array of image data
          setLoading(false);
        });
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const toggleImageSize = (index) => {
    setEnlargedIndex(index === enlargedIndex ? -1 : index);
  };

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Oops />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl text-center font-bold" id="gallery">
        Gallery
      </h1>
      <div className="mx-auto grid  max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 w-full">
      {apiData && apiData.map((pic, index) => (
  <Image
    key={index}
    src={pic.name.startsWith("https://webplentybackend.s3.ap-south-1.amazonaws.com/")
      ? pic.name
      : pic.name.replace(
          "https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/",
          "https://webplentybackend.s3.ap-south-1.amazonaws.com/"
        )}
    height={1200}
    width={800}
    className="aspect-square object-cover"
    alt="Gallery"
    onClick={() => toggleImageSize(index)}
    style={{
      cursor: "pointer",
      transform: enlargedIndex === index ? "scale(1.3)" : "scale(1)",
      transition: "transform 0.5s",
      zIndex: enlargedIndex === index ? 1 : "auto",
      position: enlargedIndex === index ? "absolute" : "relative",
      left: enlargedIndex === index ? "20%" : "auto",
      border: "4px solid #cfcecc",
    }}
  />
))}
      </div>
    </>
  );
}
