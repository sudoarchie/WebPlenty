"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Heroimg from 'https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/h.png'

export function Hero() {
  const slides = [
    {
      url: "https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/h.png",
    },
    {
      url: "https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/ketaki-singh.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const updateIndexEvery5Seconds = () => {
    const interval = setInterval(() => {
      nextSlide(); // Go to the next slide
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  };

  useEffect(() => {
    const cleanUpInterval = updateIndexEvery5Seconds();
    return () => {
      cleanUpInterval(); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div className="relative w-full bg-white mt-10">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="rounded-lg bg-gray-200 py-4 flex items-center group justify-center">
          <div className="cursor-pointer" onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="hidden  group-hover:block"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>

          <Image
            src={slides[currentIndex].url}
            className="aspect-[3/2] w-[80%] md:w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px] duration-500 "
            width={1026} // Replace 'yourWidth' with the actual width of your image
            height={412} // Replace 'yourHeight' with the actual height of your image
            alt="Go Back"
          />
          <div className="cursor-pointer" onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="hidden group-hover:block"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
