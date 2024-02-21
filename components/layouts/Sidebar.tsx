"use client";
import { NavbarLinks } from "@/constants";
import Link from "next/link";
import React, { useRef } from "react";

const Sidebar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
//   setTimeout(() => {
//     if (menuRef.current) {
//       menuRef.current.style.height = "100%";
//     }
//   }, 1000);
  return (
    <div
      ref={menuRef}
      className={`absolute right-0 h-0 overflow-hidden duration-500 w-full bg-white z-50 `}
    >
      <div className="flex items-center justify-center flex-col gap-10 ">
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
    </div>
  );
};

export default Sidebar;
