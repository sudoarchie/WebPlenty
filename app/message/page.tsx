
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";

function Page(){
    return (
        <>
        <div className="w-[100vw] fixed z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div className="fixed">
          <Sidebar />
        </div>
        
        </div>
        </>
    );

}
export default Page;