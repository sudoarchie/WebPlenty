'use client'

import React from 'react'
import Link from 'next/link'
import { Menu,User, MapPin,MessageSquare,BarChart, X } from 'lucide-react'
import Image from 'next/image'

import bjplogo from '../../images/bjplogo.jpg'

const menuItems = [
  {
    name: 'Home',
    href: '../',
  },
  // {
  //   name: 'बाँसडीह',
  //   href: '#',
  // },
  // {
  //   name: 'बेरुआरबारी',
  //   href: '#',
  // },
  // {
  //   name: 'मनियर',
  //   href: '#',
  // },{
  //   name: 'सहतवार',
  //   href: '#',
  // },
  // {
  //   name: 'रेवती',
  //   href: '#',
  // },
]


export function NavbarLogout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  

  

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 ">
        <div className="inline-flex items-center space-x-2">
          <span>
            
              <Image
                  src={bjplogo} 
                  className=" w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[50px] sm:h-[30px]"
                  alt="BJP"
                />
          
          </span>
          <span className="font-bold">BJP</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button  
            type="button"
            className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
             <Link href="/  n">Logout</Link>
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
              <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
            <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
     
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                Navigate
              </label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../form"
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Registration</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../karykarta"
              >
                <User className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Karyakarta</span>
              </Link>
             
              
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../mundalmaster"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">मंडल मास्टर</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/sectormaster"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">सेक्टर मास्टर</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="../boothmaster"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">बूथ मास्टर</span>
              </Link> 
            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                content
              </label>

              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Send SMS</span>
              </Link>
            </div>
          </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

