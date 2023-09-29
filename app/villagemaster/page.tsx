import React from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { TableData } from "./table";
function page() {
  return (
    <>
    <div className="w-[100vw] fixed z-10">
        <NavbarLogout></NavbarLogout>
      </div>
      <div className="flex">
        <div className="fixed">
          <Sidebar></Sidebar>
        </div>
      </div>
      <div className="w-[80vw] relative top-20  left-64">
      <h1 className="text-3xl flex underline justify-center font-bold w-full">Village Master</h1>
      <TableData></TableData>
      </div>
    </>
  );
}
export default page