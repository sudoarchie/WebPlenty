'use client'
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import backbuttonimg from '../icons/backbutton.png'
import bjplogo from '../../images/bjplogo.jpg'
import toast, { Toaster } from 'react-hot-toast'
export default function SignInOne() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Reset previous error messages

    // Validate email
    if (!isValidEmail(email)) {
      toast.error('Enter the email ', {
        duration: 800,
        style: {
          border: '1px solid black',
          padding: '16px',
        },
      })
      return
    }

    // Validate password
    if (!isValidPassword(password)) {
      toast.error('Enter the password', {
        duration: 1000,
        style: {
          border: '1px solid black',
          padding: '16px',
        },
      })
      return
    }

    // If all validations pass, submit the form
    // Your submission logic here
  }

  const isValidEmail = (email: string): boolean => {
    // Use a regular expression to validate email format
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPassword = (password: string): boolean => {
    // Check if password length is at least 6 characters
    return password.length >= 6
  }

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
            {/* <svg
              width="50"
              height="56"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
         
            </svg> */}
             <Image
                  src={bjplogo} 
                  className=" w-[50px] h-[50px]"
                  alt="BJP"
                />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Login to your account
          </h2>
          {/* <p className="mt-2 text-center text-base text-gray-600"> */}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {/* Don't have an account{' '}
            <Link
              href="/signup"
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p> */}
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
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
