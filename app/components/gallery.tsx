"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ev6 from "../../images/ev6.jpg";
import ev7 from "../../images/ev7.jpg";
import ev8 from "../../images/ev8.jpg";
import ev9 from "../../images/ev9.jpg";
import ev12 from "../../images/ev12.jpg";
import ev13 from "../../images/ev13.jpg";
import { relative } from "path";
// Define an array of photos
const photos = [
  { src: ev6, alt: "6" },
  { src: ev7, alt: "7" },
  { src: ev8, alt: "8" },
  { src: ev9, alt: "9" },
  { src: ev12, alt:"12" },
  { src: ev13, alt:"13" },
];

export function Gallery() {
  const [enlargedIndex, setEnlargedIndex] = useState(-1);

  const toggleImageSize = (index: React.SetStateAction<number>) => {
    setEnlargedIndex(index === enlargedIndex ? -1 : index);
  };
  return (<>
  <h1 className="text-3xl text-center font-bold">Gallery</h1>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {photos.map((pic, index) => (
        <Image
          key={index} // Add a unique key for each image
          src={pic.src}
          // height={600}
          // width={400}
          className="relative    rounded-md md:aspect-auto md:w-[400px] md:h-[200px] object-cover"
          alt={pic.alt}
          onClick={() => toggleImageSize(index)}
          style={{
            
            cursor: 'pointer',
            transform: enlargedIndex === index ? 'scale(2)' : 'scale(1)',
            transition: 'transform 0.5s',
            zIndex: enlargedIndex === index ? 1 : 'auto',
            position: enlargedIndex === index ? 'absolute': 'relative',
            left: enlargedIndex === index ? '40%' : 'auto',
            border: '4px solid #cfcecc' 
          }}
        />
      ))}
      
    </div>
    </>
  );
}
