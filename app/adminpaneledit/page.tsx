"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import backbuttonimg from "../icons/backbutton.png";
import bjplogo from "../../images/bjplogo.jpg";
import toast, { Toaster } from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { api } from "../pages/api";
import { useSearchParams } from "next/navigation";
import {useRouter} from "next/navigation";
import Spinner from "../components/spinner";

export default function Page() {
  const [info, setInfo] = useState<any>();
  const [load, setLoad] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      console.log(JSON.parse(dataParam));
      setInfo(JSON.parse(dataParam));
      setLoad(false);
    }
  }, []);
  const { handleSubmit, control } = useForm();
  console.log(info);
  const handleFormSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await api.put(`/user/${info.id}`, data);
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
      toast.error(error.response.data.message, {
        icon: "😥",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  if (load) {
    return (
      <>
        <div><Spinner></Spinner></div>
      </>
    );
  }
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <Link href="./adminpanel">
            <div className="flex justify-end">
              <div>
                <Image
                  src={backbuttonimg}
                  alt="Go Back"
                  className="w-4 md:w-7 lg:7"
                />
              </div>
            </div>
          </Link>
          <div className="mb-2 flex justify-center">
            <Image src={bjplogo} className=" w-[50px] h-[50px]" alt="BJP" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Create New Admin
          </h2>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={info ? info.name : ""}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Name"
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="text-base font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue={info ? info.phoneNumber : ""}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Phone Number"
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="text-base font-medium text-gray-900"
                >
                  Date of Birth (DOB)
                </label>
                <div className="mt-2">
                  <Controller
                    name="dob"
                    control={control}
                    defaultValue={info ? info.dob : ""}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="date"
                        placeholder="Date of Birth"
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Controller
                    name="email"
                    control={control}
                    defaultValue={info ? info.email : ""}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-500 my-5"
              >
                Update Admin
                <ArrowRight className="ml-2" size={16} />
              </button>
              <Toaster />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
interface UserData {
  email: string;
  name: string;
  phoneNumber: string;
  dob: string;
  password: string;
  id:number
}