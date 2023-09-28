import React from 'react'
// import { Navbar } from '../components/navbar'
import { NavbarLogout } from '../components/navbarlogout'
import { TableData } from '../components/table'
import { Sidebar } from '../components/sidebar'

function page() {
  return (
    <>
    <div className='w-[100vw] fixed z-10'>
    <NavbarLogout></NavbarLogout>  
    </div>
    <div className='flex'>
      <div className='fixed'>

    <Sidebar></Sidebar>
      </div>
    <div className='w-[80vw] relative top-10  left-64'>
    <div className='flex justify-center'><h1 className='text-2xl font-extrabold mt-10 '>केतकी सिंह विधायक 362 विधान सभा बांसडीह</h1></div>
    <TableData></TableData>
    </div>
    </div>
    </>
  )
}

export default page