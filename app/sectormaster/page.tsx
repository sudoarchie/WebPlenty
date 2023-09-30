import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { Table } from "./table";

function page() {
  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div >
          <Sidebar />
        </div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-extrabold mt-10">कार्यकर्ता विवरण</h1>
          <Table></Table>
        </div>
      </div>
    </>
  );
}
export default page;
