'use client'

import React from 'react'
import Image from 'next/image'
import modiyogi from '../../images/modiyogi.png'
import { Menu, X, MapPin } from 'lucide-react'
import { NavbarLogout } from '../components/navbarlogout'
import KarykartaForm from './KarykartaForm'
import { Sidebar } from '../components/sidebar'
import  KarykartaFormData  from './KarykartaForm'



function page() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    // setIsMenuOpen(!isMenuOpen)
  }
 

  const handleFormSubmit = (formData: any) => {
    // Handle the form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <div className='w-[100vw] fixed z-10'>
    <NavbarLogout></NavbarLogout>  
    </div>
      <div className='flex'>
      <div className='fixed'>

    <Sidebar></Sidebar>
      </div>
      </div>
      <div className=" sm:mx-0 md:mx-8 lg:mx-16 xl:mx-32 max-w-7xl px-4 mx-auto" style={{ overflowX: 'hidden' }}>
      
        <div className="center max-w-7xl  py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl mt-2 font-bold text-gray-900 md:text-4xl">कार्यकर्त्ता प्रपत्र</p>
                
                
                <KarykartaForm onSubmit={handleFormSubmit}></KarykartaForm>
              </div>
            </div>
            <Image
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src={modiyogi}
            />
          </div>
        </div>
      </div>
      {/* Address */}
      
      <hr className="mt-6" />
      
    </div>
  )
}

export default page;