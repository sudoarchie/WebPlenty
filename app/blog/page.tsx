'use client'
import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/navbar';
import Image from 'next/image';
import Heroimg from '../../images/2.jpg';
import api from '../pages/api';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

function Page() {
  const [info, setInfo] = useState<any>(null);
  const [load, setLoad] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      setInfo(JSON.parse(dataParam));
      setLoad(false);
    }
  }, []);

  const handleFormSubmit = async (data: any) => {
    try {
      const response = await api.put(`/user/${info?.id}`, data);
      toast.success(response.data.message, {
        icon: "😎",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setTimeout(() => {
        router.push("../adminpanel");
      }, 500);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred", {
        icon: "😥",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full bg-white mt-10">
        <div className="mx-auto sm:w-full md:max-w-[90%] lg:max-w-[80%]">
          <div className="rounded-lg bg-gray-200 p-4">
            <Image
              src={info?.image.startsWith("https://webplentybackend.s3.ap-south-1.amazonaws.com/")
                ? info?.image
                : info?.image.replace(
                    "https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/",
                    "https://webplentybackend.s3.ap-south-1.amazonaws.com/"
                  )}
              alt="Go Back"
              width={1200}
              height={800}
              className="rounded-lg bg-gray-50 object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto sm:w-full md:max-w-[90%] lg:max-w-[80%]">
        <div className="mx-auto p-4">
          <h1 className="text-4xl font-bold">{info ? info.title : "use Client"}</h1>
          <p className="py-4">{info ? info.content : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
