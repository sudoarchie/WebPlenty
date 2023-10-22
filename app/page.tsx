import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Writting } from "./components/writting";
import { Leadabout } from "./components/leadabout";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import Maps from "./components/maps";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Leadabout></Leadabout>
      {/* <div className="flex justify-center">
         <h2 className="font-bold text-3xl underline">हमारा कार्य</h2> 
      </div> */}
      {/* <Writting></Writting>
      <div className="flex justify-center">
        <h2 className="font-bold text-3xl underline">Gallery</h2>
      </div> */}
      <Gallery></Gallery>
      <Maps></Maps>
      <Footer></Footer>
    </>
  );
}
