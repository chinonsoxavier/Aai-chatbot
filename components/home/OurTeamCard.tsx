"use client";
import Image from "next/image";
import React, { useState } from "react";

const OurTeamCard = (team: any) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredMedia, setHoveredMedia] = useState<string>("");
  const HandleHover = () => {
    setHovered((current) => !current);
  };

  const handleSocialMediaIcons =(id:string)=>{
   setHoveredMedia(id);
  }

  return (
    <div
      onMouseEnter={HandleHover}
      onMouseLeave={HandleHover}
      className={`flex-1 base:min-w-[220px] py-5 w-full bg-white min-w-[130px] rounded transition-shadow duration-1000 ${
        hovered && "shadow-lg"
      }`}
    >
      <div className=" relative flex items-center justify-center w-full h-full">
        <div
          className={`${
            !hovered
              ? "before:z-[-1] before:absolute before:w-full before:bg-[#f9f6f6] before:h-3"
              : "before:h-0 before:w-full before:absolute"
          }  before:transition-all before:duration-1000  z-[10] flex  items-center justify-center rounded-full w-full h-full tablet:max-w-[160px] tablet:max-h-[160px] `}
        >
          <div
            className={`flex transition-colors duration-1000 items-center justify-center rounded-full h-[60%] w-[60%] border-[3px] z- z-10 ${
              hovered ? "border-[#43e794]" : " border-[#cdf1d8]"
            }`}
          >
            <Image
              src={team.team.image}
              alt={team.team.name}
              className="w-full h-full object-contain z-10 relative  rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-5">
        <button
          id="ourTeamCard_Button"
          className={`flex items-center transition-all duration-1000 flex-col justify-center py-[10px] px-10   leading-[2px] text-center ${
            hovered ? "w-full " : "w-[90%] rounded-[75px]"
          }`}
        >
          <span className="text-lg leading-[25px]">{team.team.name}</span>
          <br />
          <span className="text-sm font-light leading-[25px]">
            CEO & Founder
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <ul className={`flex items-center justify-center gap-4 `}>
          <li
            className="hover:-translate-y-1 transition-transform duration-700"
            onMouseEnter={() => handleSocialMediaIcons("facebook")}
            onMouseLeave={() => handleSocialMediaIcons("")}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className={`${
                hoveredMedia === "facebook"
                  ? " text-primary_green "
                  : " text-primary_purple"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </li>
          <li
            onMouseEnter={() => handleSocialMediaIcons("twitter")}
            onMouseLeave={() => handleSocialMediaIcons("")}
            className="hover:-translate-y-1 transition-transform duration-700"
          >
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={`${
                hoveredMedia === "twitter"
                  ? " text-primary_green "
                  : " text-primary_purple"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </li>
          <li
            onMouseEnter={() => handleSocialMediaIcons("linkedin")}
            onMouseLeave={() => handleSocialMediaIcons("")}
            className="hover:-translate-y-1 transition-transform duration-700"
          >
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className={`${
                hoveredMedia === "linkedin"
                  ? " text-primary_green "
                  : " text-primary_purple"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
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
            </a>
          </li>
          <li
            onMouseEnter={() => handleSocialMediaIcons("gitlab")}
            onMouseLeave={() => handleSocialMediaIcons("")}
            className="hover:-translate-y-1 transition-transform duration-700"
          >
            <a
              href="https://gitlab.com/"
              target="_blank"
              rel="noreferrer"
              className={`${
                hoveredMedia === "gitlab"
                  ? " text-primary_green "
                  : " text-primary_purple"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="px-5 mt-5" >
        <p className="text-center font-light text-sm text-dark_text" >
          Risus commodo viverra maecenas accumsan lacus vel facilisis quis
          ipsum.
        </p>
      </div>
    </div>
  );
};

export default OurTeamCard;
