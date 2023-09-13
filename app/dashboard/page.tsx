import React from 'react'
// import { Navbar } from '../components/navbar'
import { NavbarLogout } from '../components/navbarlogout'
import { TableData } from './table'

function page() {
  return (
    <>
    <NavbarLogout></NavbarLogout>  
    <div className='flex justify-center'><h1 className='text-2xl font-extrabold mt-10 '>केतकी सिंह विधायक 362 विधान सभा बांसडीह</h1></div>
    <TableData></TableData>
    </>
  )
}

export default page