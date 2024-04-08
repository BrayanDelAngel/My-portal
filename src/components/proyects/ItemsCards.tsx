"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  path: string;
  name: string;
  description: string;
  listTecnology: string[];
  listIconTecnology: JSX.Element[];
  reverse?: boolean; // Propiedad opcional para cambiar el orden
}

export const ItemsCards = ({
  path,
  name,
  description,
  listTecnology,
  listIconTecnology,
  reverse = false, // Valor por defecto
}: Props) => {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="flex min-h-48 items-center justify-center m-2 mb-5 md:m-4">
      <div
        className={`relative grid-cols-1 md:flex w-full max-w-6xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ${
          reverse ? "flex-row-reverse" : "" // Aplicar clase para cambiar el orden
        }`}
      >
        <div className="p-4">
          <h6 className="mb-2 block font-sans text-lg text-center font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
            {name}
          </h6>
          <h4 className="mb-1 block font-sans text-base text-justify font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {description}
          </h4>
          <div className="mb-2 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
            <ul>
              {listTecnology.map((technology, index) => (
                <li key={index} className="list-disc ml-6">
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            {listIconTecnology.map((icon, index) => (
              <div key={index} className="mr-2">
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`relative m-0 md:w-1/2 shrink-0 overflow-hidden rounded-xl rounded-b-xl  bg-white bg-clip-border text-gray-700 ${
            showPreview ? "cursor-pointer" : ""
          } ${reverse ? 'md:rounded-r-none':' md:rounded-l-none'}`}
          onClick={togglePreview}
        >
          <Image
            src={path}
            alt={name}
            className={`h-full w-full object-cover cursor-pointer ${
              showPreview ? "" : "max-h-full"
            }`}
            width={200}
            height={200}
          />
          {showPreview && (
            <div
              className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-75"
              onClick={togglePreview}
            >
              <div className="max-w-full max-h-full overflow-auto">
                <Image src={path} alt={name} width={800} height={800} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
