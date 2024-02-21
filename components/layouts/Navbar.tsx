"use client";
import Image from "next/image";
import React, { useState } from "react";
import { NavbarLinks } from "@/constants";
import Link from "next/link";
import ButtonWidget from "@/widgets/ButtonWidget";
import { Logo } from "@/constants/exports";

const Navbar = () => {
  const [menucollapsed, setCollapsed] = useState<boolean>(false);
  const HandleClick = () => {
    setCollapsed((current) => !current);
  };

  return (
    <div className="w-full bg-blck flex items-center justify-center flex-col z-50 sticky h-[5rem]  top-0 ">
      <div className="flex items-center justify-start w-full max-width medium:gap-3">
        <div className="flex items-center justify-between flex-auto max-w-[100px]">
          <Image
            alt="logo"
            src={Logo}
            className=" w-full h-full object-contain"
          />
        </div>
        <div className="flex base:hidden items-center flex-auto justify-end lg:gap-10  gap-5 ">
          {NavbarLinks.map((link) => (
            <div className="" key={link.title}>
              <Link href={link.url}>
                <p className="text-dark_text  cursor-pointer font-medium text-[.94rem] hover:text-primary_green">
                  {link.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex-auto items-center justify-end bg-primry_green flex gap-6  ">
          {/* <div> */}
          {/* <ButtonWidget
              id="Navbar_Btn"
              title="SUPPORT"
              containerStyles="before:duration-1000 after:duration-1000 before:bg-primary_green after:bg-primary_green hover:text-white hover:transition-colors hover:delay-[500ms] hover:duration-[1s] ButtonWidget text-[14px] border-dashed border-2 border-primary_green/50  "
            /> */}
          <div
            id="Navbar_Btn"
            // style={{transition:'all 1.3s'}}
            className={`ButtonWidget capitalize  pointer relative whitespace-nowrap overflow-hidden rounded-[4px] py-[12px] px-8 flex items-center justify-center font-semibold w-40 before:duration-1000 after:duration-1000 before:bg-primary_green after:bg-primary_green hover:text-white hover:transition-colors hover:delay-[500ms] hover:duration-[1s] ButtonWidget text-[14px] border-dashed border-2 border-primary_green/50 cursor-pointer medium:hidden `}
          >
            <button className="capitalize">support</button>
          </div>
          {/* </div> */}
          <div
            id="Navbar_Btn"
            // style={{transition:'all 1.3s'}}
            className={`ButtonWidget capitalize  pointer relative whitespace-nowrap overflow-hidden rounded-[4px] py-[12px] px-8  flex items-center justify-center font-semibold w-40 before:duration-1000 after:duration-1000 before:bg-primary_green after:bg-primary_green text-white bg-primary_purple ButtonWidget  text-[.9rem] shadow-primary_green/50 hover:shadow-xl z-10 ease-in-out cursor-pointer mobile:px-5  mobile:w-20 mobile:py-[8px]`}
          >
            <button className="capitalize">login</button>
          </div>
          {/* </div> */}
          {/* <div>
            <ButtonWidget
              id="Navbar_Btn"
              title="LOGIN"
              containerStyles="before:duration-1000 after:duration-1000 before:bg-primary_green after:bg-primary_green text-white bg-primary_purple ButtonWidget  text-[.9rem] shadow-primary_green/50 hover:shadow-xl z-10 ease-in-out"
            />
          </div> */}
        </div>
        <div
          className="flex items-center justify-center flex-col gap-2 cursor-pointer relative transi transition-transform w-10 bg-slate-00 h-10 p-1"
          onClick={HandleClick}
        >
          {/* <div> */}
          <span
            className={`w-full h-1 bg-black duration-500 ${
              menucollapsed && "rotate-45 absolute  transition-transform"
            }`}
          ></span>
          <span
            className={`w-full h-1 bg-black duration-500 ${
              menucollapsed && "hidden absolute transition-opacity "
            }`}
          ></span>
          <span
            className={`w-full h-1 bg-black duration-500 ${
              menucollapsed && "-rotate-45 absolute  transition-transform"
            }`}
          ></span>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
