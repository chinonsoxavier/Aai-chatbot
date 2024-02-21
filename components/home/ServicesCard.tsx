"use client";
import Image from "next/image";
import repairServices from '../../utils/images/repair-services-img1-c308c47431e8af57e0d153aa45b52a55.jpg'
import software from "../../utils/images/software.png";
import React, { useState } from "react";
import { OurServicesInterface } from "@/interface";

const ServicesCard = ({service,key}:any) => {
  const [hovered, setHovered] = useState<boolean>();

  const handleHover = () => {
    setHovered((current) => !current);
  };

  return (
    <div
      className={`relative hover:text-white hover: before:absolute before:top-0 before:w-full before-h-full hover:bg border-dashed border-[1.4px] basis-[320px] base:basis-[250px] flex-grow border-primary_green/100 gap-6  px-4 py-10 flex items-start min-w-[100px] justify-center flex-col  duration-700 hover:bg-gradient-to-b hover:to-[#23bdb8] hover:from-[#43e794] before:opacity-5 bg-gradient-to-tl before:z-0  z-10`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      //   style={{ backgroundImage: `url(${repairServices.src})` }}
    >
      <div
        className={`absolute transition-opacity top-0 left-0 -z-20 h-full w-full duration-700 ${
          hovered ? "opacity-40" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${service.Image.src})` }}
      >
        {/* <Image src={repairServices} alt="repair services" /> */}
      </div>
      <div
        className={`flex items-center justify-center rounded-full w-20 h-20 p-5 ${
          hovered ? "border-white stroke-white fill-white" : "border-primary_green stroke-primary_green fill-primary_green"
        }  border-[1px] duration-700 z-20`}
      >
        {service.Icon}
      
      </div>
      <div
        className={`flex items-center justify-center text-base font-semibold ${
          hovered ? "text-white" : "text-[#0e314c]/90"
        } duration-700 z-20`}
      >
        <h3>{service.title}</h3>
      </div>
      <div className="flex items-center justify-start z-20">
        {/* <p
          className={`${
            hovered ? "text-white" : "text-dark_text"
          }  text-sm max-w-[80%] `}
        >
          Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod
          tempor incididunt ut labore dolore magna aliqua.
        </p> */}
      </div>
      <div
        className={`flex items-center duration-700 z-20 justify-center rounded-full w-10 h-10 ${
          hovered ? "bg-white" : "bg-black/10"
        }`}
      >
        <svg
          className={`flex items-center justify-center ${
            hovered ? "text-primary_green/60" : "text-black"
          } `}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default ServicesCard;
