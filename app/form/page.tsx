import { NavbarLogout } from "../components/navbarlogout";
import Image from "next/image";
import bjpimg from "../../images/BJP-Logo-HD-PNG.png"
import { Footer } from "../components/footer";

function page() {
  return (
    <>
      <NavbarLogout></NavbarLogout>
      <div className="w-full flex  justify-center mt-20">
        <div className="w-[90vw] flex flex-wrap justify-center">
          <div className="w-[40%] border-2 border-orange-600 text-center hidden max-h-full rounded-lg object-cover lg:block">
            <h1 className="text-2xl text-center underline m-[30px] ">भारतीय जनता पार्टी</h1>
            <Image src={bjpimg} className="m-auto" alt="bjplogo"></Image>
            <h1 className="text-2xl text-center  m-[30px] ">हमसे जुड़ें</h1>

          </div>
          <div className=" overflow-auto mx-7 lg: w-[55%]">
            <h1 className="text-2xl font-bold underline text-center m-[30px]">
            सदस्य प्रपत्र
            </h1>
            <form action="" className="flex flex-wrap justify-center">
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  className="m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Address"
                  className="m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="  ">
                
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="  ">
                <select
                 
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                >
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>shikh</option>
                  <option>christian</option>
                </select>
              </div>
              <div className="  ">
                <select
                  placeholder="dd-mm-yyyy"
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                  
                </select>
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Previous Party"
                  className="m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="  ">
                <select
                  placeholder=""
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                >
                  <option disabled selected>Mandal</option>
                  <option>Bansdih</option>
                  <option>Maniyar</option>
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                  
                </select>
              </div>
              <div className="  ">
                <select
                  placeholder=""
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                >
                  <option disabled selected>Sector</option>
                  <option>Bansdih</option>
                  <option>Maniyar</option>
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                  
                </select>
              </div>
              <div className="  ">
                <select
                  placeholder=""
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                >
                  <option disabled selected>PoolingBooth</option>
                  <option>Bansdih</option>
                  <option>Maniyar</option>
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                  
                </select>
              </div>
              <div className="  ">
                <select
                  placeholder=""
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                >
                  <option disabled selected>Role</option>
                  <option>Bansdih</option>
                  <option>Maniyar</option>
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                  
                </select>
                <div className="">
                <input
                  type="Submit"
                  placeholder="Previous Party"
                  className="m-5 w-[268px] placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600 rounded-sm hover:bg-green-600 hover:text-white"
                ></input>
              </div>
              </div>
    

            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default page;