import React from "react";
import Image from "next/image";
import ev6 from "../../images/ev6.jpg";
import ev7 from "../../images/ev7.jpg";
import ev8 from "../../images/ev8.jpg";
import ev9 from "../../images/ev9.jpg";
import ev12 from "../../images/ev12.jpg";
import ev13 from "../../images/ev13.jpg";

export function Gallery() {
  return (
    <>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[200px]">
          <Image
            src={ev6}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md  to-transparent"></div>
          
        </div>
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[200px]">
          <Image
            src={ev7}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md  to-transparent"></div>
          
        </div>
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[200px]">
          <Image
            src={ev8}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md  to-transparent"></div>
          
        </div>
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[200px]">
          <Image
            src={ev9}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md  to-transparent"></div>
          
        </div>
        {/* </div> */}
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[200px]">
          <Image
            src={ev12}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md  to-transparent"></div>
          
        </div>
        {/* </div> */}
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[200px]">
          <Image
            src={ev13}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md  to-transparent"></div>
          
        </div>
      </div>
    </>
  );
}
