import { Logo, worldMapVector } from "@/constants/exports";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f7fafd] flex items-center justify-center w-full relative">
      <div className="absolute bg-late-500 flex items-center justify-center bottom-0 w-full h-full z-0">
        <Image
          src={worldMapVector}
          alt="world map"
          className="w-full h-full  object-contain"
        />
      </div>
      <div className="max-width z-10 ">
        <div className="w-full flex items-start justify-center py-20 base:py-10 base:gap-6 flex-wrap">
          <div className="flex-1 min-w-[250px]    flex items-start justify-start gap-5 flex-col base:items-center">
            <div className="flex items-center justify-between flex-auto max-w-[100px]">
              <Image
                alt="logo"
                src={Logo}
                className=" w-full h-full object-contain"
              />
            </div>
            <p className="f text-xs text-dark_text leading-8 max-w-[230px] base:max-w-full mobile:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>
          <div className="flex-1 min-w-[250px]   flex items-start justify-start gap-5 flex-col">
            <h2 className="c text-lg base:text-base text-darker_text">Company</h2>
            <ul className="flex items-start justify-start gap-2 flex-col">
              <li className="text-dark_text text-sm base:text-xs  hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="text-dark_text text-sm base:text-xs hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                <Link href="/services">Services</Link>
              </li>
              <li className="text-dark_text text-sm base:text-xs hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                <Link href="features">Features</Link>
              </li>
              <li className="text-dark_text text-sm base:text-xs hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                <Link href="/pricing">Our Pricing</Link>
              </li>
              <li className="text-dark_text text-sm base:text-xs hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                <Link href="/news">Latest News</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[250px]  h-full  flex items-start justify-start flex-col gap-5">
            <h2 className="c text-lg base:text-base text-darker_text">Support</h2>
            <ul className="flex items-start justify-start gap-2 flex-col">
              <Link href="/faq`s">
                <li className="text-dark_text text-sm base:text-xs  hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                  FAQ`S
                </li>
              </Link>
              <li className="text-dark_text text-sm base:text-xs hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                <Link href="/privacy-policy`s">Privacy Policy</Link>
              </li>
              <li className="text-dark_text text-sm base:text-xs hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500 ">
                <Link href="/terms&condition">Terms & Condition</Link>
              </li>
              <li className="text-dark_text text-sm base:text-xs hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                <Link href="/team">Team</Link>
              </li>
              <li className="text-dark_text text-sm base:text-xs hover:text-[#44ce6f] hover:translate-x-1 transition-transform duration-500">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[250px]  flex items-start justify-start gap-5 h-full flex-col">
            <h2 className=" text-lg base:text-base text-darker_text">Address</h2>
            <ul className="flex items-start justify-start gap-2 flex-col">
              <li className="text-dark_text gap-2 text-sm base:text-xs flex items-start justify-start tran">
                <svg
                  className="mt-[1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="mb- m">
                  27 Division St, New York, NY 10002, USA
                </span>
              </li>
              <li className="text-dark_text gap-2 text-sm base:text-xs flex items-start justify-start">
                <svg
                  className="mt-[1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="mb- m">Email: spet@gmail.com</span>
              </li>
              <li className="text-dark_text gap-2 text-sm base:text-xs flex items-start justify-start">
                <svg
                  className="mt-[1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="mb- m">Phone: + (321) 984 754</span>
              </li>
            </ul>
            <ul className="flex items-center justify-start gap-1">
              <li
                className={`w-10 h-10 rounded-full border border-[#4267b2] text-[#4267b2] hover:text-white hover:bg-[#4267b2] transition-colors duration-700`}
              >
                <Link
                  href="https://www.facebook.com"
                  className="w-full h-full rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </li>
              <li
                className={`w-10 h-10 rounded-full border border-[#38a1f3] text-[#38a1f3] hover:text-white hover:bg-[#38a1f3] transition-colors duration-700`}
              >
                <Link
                  href="https://www.twitter.com"
                  className="w-full h-full rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </li>
              <li
                className={`w-10 h-10 rounded-full border border-[#231f20] text-[#231f20] hover:text-white hover:bg-[#231f20] transition-colors duration-700`}
              >
                <Link
                  href="https://www.instagram.com"
                  className="w-full h-full rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </li>
              <li
                className={`w-10 h-10 rounded-full border border-[#0077b5] text-[#0077b5] hover:text-white hover:bg-[#0077b5] transition-colors duration-700`}
              >
                <Link
                  href="https://www.linkedin.com"
                  className="w-full h-full rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-[#d8ebfd] border-t text-center text-dark_text text-xs w-full p-5">
          Copyright © 2024 Spet. All rights reserved by{" "}
          <b className="font-medium">Chinonso Xavier</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
