"use client"
import Image from "next/image";
import React, { useState } from "react";

const WhyChooseUsCard = (item:any) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const HandleHover = () => {
    setHovered((current) => !current);
  };
  return (
    <div
      className={`flex  items-start bg-white flex-1 justify-start  transition-colors duration-500 flex-col border border-dashed gap-5 h-full p-8 base:p-4 base:gap-3 ${
        hovered ? "border-primary_green" : "border-[#cdf1d8] min-w-[250px]"
      }`}
      onMouseEnter={HandleHover}
      onMouseLeave={HandleHover}
    >
      <div className="flex items-center justify-center rounded-full w-24 h-24 relative border border-[#f7fafd] p-2 base:p-1 base:w-20 base:h-20">
        <div className="bg-[#f7fafd] w-full h-full rounded-full flex items-center justify-center ">
          <Image
            src={item.item.image}
            alt={item.item.department}
            className="object-contain w-[60%] h-[60%]"
          />
        </div>
      </div>
      <h3 className="whitespace-nowrap text-xl text-darker_text base:text-lg ">
        {item.item.department}
      </h3>
      <p className=" text-sm text-dark_text base:text-xs">{item.item.text}</p>
      <div
        className={`flex items-center justify-center  border hover:text-white ${
          hovered ? "bg-primary_green text-white border-none" : " bg-white"
        } cursor-pointer p-2 w-11 h-11 rounded-full transition duration-300 `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
}

export default WhyChooseUsCard