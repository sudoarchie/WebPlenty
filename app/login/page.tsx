'use client'
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import backbuttonimg from '../icons/backbutton.png'
import bjplogo from '../../images/bjplogo.jpg'
import toast, { Toaster } from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form';
import { api } from '../pages/api'
export default function SignInOne() {
 

  const { handleSubmit, control } = useForm();
  const handleFormSubmit = async (data:any) => {
    console.log(data);
    api.post('/user/login',{
      ...data
    },{ withCredentials: true,  })
    .then((info)=>{
      localStorage.setItem("accessToken", info.data.data);
    }).catch((error)=>{
      console.log(error)
    })
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <Link href="/">
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
             <Image
                  src={bjplogo} 
                  className=" w-[50px] h-[50px]"
                  alt="BJP"
                />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Login to your account
          </h2>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-8">
  <div className="space-y-5">
    <div>
      <label htmlFor="email" className="text-base font-medium text-gray-900">
        Email address
      </label>
      <div className="mt-2">
        <Controller
          name="email"
          control={control}
          defaultValue=""
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
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="text-base font-medium text-gray-900">
          Password
        </label>
      </div>
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
    <div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-500"
      >
        Log In
        <ArrowRight className="ml-2" size={16} />
      </button>
      <Toaster />
    </div>
  </div>
</form>

        </div>
      </div>
    </section>
  )
}
