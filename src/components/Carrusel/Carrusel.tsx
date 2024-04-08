"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export const Carrusel = ({
  autoSlide = true,
  autoSlideInterval = 5000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: {
    src: string;
    title: string;
    subtitle: string;
    text: string;
  }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1));;
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);
  return (
    <div className="max-w-lg  md:max-w-6xl h-auto w-full m-auto relative group shadow-lg rounded-xl">
      {/* _Image and text carrusel */}
      <div className="flex-row md:flex w-full">
        <Image
          src={slides[currentIndex].src}
          alt={slides[currentIndex].title}
          width={500}
          height={300}
          className="rounded-l-2xl bg-cover duration-500"
        />
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center h-full px-4">
            <h1 className="text-base p-5 md:text-3xl font-bold text-blue-500 md:m-2 md:p-0">
              {slides[currentIndex].title}
            </h1>
            <h2 className="hidden text-xl font-semibold m-2 md:block">
              {slides[currentIndex].subtitle}
            </h2>
            <p className=" hidden text-base text-justify md:block">{slides[currentIndex].text}</p>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FaAngleLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FaAngleRight onClick={nextSlide} size={30} />
      </div>
      <div className="bottom-1 absolute md:bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`
      transition-all w-3 h-3 bg-blue-500 rounded-full cursor-pointer
      ${currentIndex === index ? "p-2" : "bg-opacity-50"}
    `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
