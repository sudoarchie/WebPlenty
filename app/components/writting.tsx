import React from "react";
import Image from "next/image";
// import image12 from "../../images/12.jpg";
// import image13 from "../../images/13.jpg";
// import image14 from "../../images/14.jpg";
// import image15 from "../../images/15.jpg";
// import image6 from "../../images/6.jpg"
import image7 from "../../images/7.jpg"

export function Writting() {
  return (
    <>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
          <Image
            src="https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/12.jpg"
            width={1280}
            height={960}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Kanya Sumangla scheme
            </h1>

            
            {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button> */}
          </div>
        </div>
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
          <Image
            src="https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/13.jpg"
            width={1280}
            height={960}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Kanya Sumangla scheme
            </h1>

            
            {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button> */}
          </div>
        </div>
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
          <Image
            src="https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/14.jpg"
            width={1280}
            height={960}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Kanya Sumangla scheme
            </h1>

            
            {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button> */}
          </div>
        </div>
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
          <Image
            src="https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/15.jpg"
            width={1280}
            height={960}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Kanya Sumangla scheme
            </h1>

            
            {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button> */}
          </div>
        </div>
        {/* </div> */}
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
          <Image
            src="https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/6.jpg"
            width={960}
            height={720}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Kanya Sumangla scheme
            </h1>

            
            {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button> */}
          </div>
        </div>
        {/* </div> */}
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
          <Image
            src="https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/7.jpg"
            width={1024}
            height={768}
            alt="Kanya Sumangla scheme"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Kanya Sumangla scheme
            </h1>

            
            {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
