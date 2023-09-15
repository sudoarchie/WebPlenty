import { NavbarLogout } from "../components/navbarlogout";
import Image from "next/image";
import bjpimg from "../../images/BJP-Logo-HD-PNG.png"

function page() {
  return (
    <>
      <NavbarLogout></NavbarLogout>
      <div className="w-full flex  justify-center ">
        <div className="w-[90vw] flex flex-wrap">
          <div className="w-[40%] border-2 border-orange-600 rounded-lg">
            <h1 className="text-2xl text-center underline m-[30px] ">भारतीय जनता पार्टी</h1>
            <Image src={bjpimg}></Image>
            <h1 className="text-2xl text-center  m-[30px] ">हमसे जुड़ें</h1>

          </div>
          <div className="w-[55%] overflow-auto mx-7">
            <h1 className="text-2xl font-bold underline text-center m-[30px]">
            सदस्य प्रपत्र
            </h1>
            <form action="" className="flex flex-wrap justify-center">
              <div className="w-[50%]">
                <input
                  type="text"
                  placeholder="Name"
                  className="m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="w-[50%]">
                <input
                  type="text"
                  placeholder="Address"
                  className="m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="w-[50%]">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="w-[50%]  ">
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="w-[50%]  ">
                <select
                  placeholder="dd-mm-yyyy"
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                >
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>shikh</option>
                  <option>christian</option>
                </select>
              </div>
              <div className="w-[50%]  ">
                <select
                  placeholder="dd-mm-yyyy"
                  className="w-[268px] m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                  
                </select>
              </div>
              <div className="w-[50%]">
                <input
                  type="text"
                  placeholder="Previous Party"
                  className="m-5 placeholder-slate-600 font-semibold border-b-4 border-orange-600 text-center p-2 focus:border-b-4 focus:border-green-600 focus:outline-green-600"
                ></input>
              </div>
              <div className="w-[50%]  ">
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
              <div className="w-[50%]  ">
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
              <div className="w-[50%]  ">
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
              <div className="w-[50%]  ">
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
                <div className="w-[50%]">
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
    </>
  );
}

export default page;
