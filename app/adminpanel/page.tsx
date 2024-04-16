'use client'
import { useEffect, useState } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { Table } from "./table";
import { api } from "../pages/api";
import { useRouter } from "next/navigation";

export default function Page() {
  const [token, setToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the code is running in the browser environment
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        router.push("/login");
      } else {
        setToken(true);
      }
    }
  }, []);

  // Check if the token is set and render content accordingly
  if (!token) {
    return (
      <div>
        Authenticating...
      </div>
    );
  }

  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="text-2xl font-extrabold mt-10">Admin Panel</h1>
          </div>
          <Table />
        </div>
      </div>
    </>
  );
}
