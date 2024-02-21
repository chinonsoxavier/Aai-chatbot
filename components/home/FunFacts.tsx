import React from 'react'

import Image from 'next/image';
import ButtonWidget from '@/widgets/ButtonWidget';
import AnimationWidget from '@/widgets/AnimationWidget';
import { worldMapVector } from '@/constants/exports';


const FunFacts = () => {
  return (
    <div className="container-reverse relative py-10 gap-10 bg-no-repeat">
      <div className="max-width flex items-center justify-center flex-col w-full">
        <div className=" absolute bg-late-500 flex items-center justify-center bottom-0 w-full h-full">
          <Image
            src={worldMapVector}
            alt="world map"
            className="w-full h-full  object-contain"
          />
        </div>
        <div
          className="flex items-center  justify-center funfactsBg max-w-[570px]"
          // style={{ backgroundImage: `url(${worldMapVector.src})` }}
        >
          <h2 className="text-center text-[25px] font-semibold text-darker_text base:text-[21px]">
            We Always Try To Understand Users <br /> Expectation
          </h2>
          <AnimationWidget />
        </div>
        <div className="flex items-center justify-center max-w-[570px] base:my-5">
          <p className="text-center text-sm opacity-95 font- leading-5 base:text-xs text-[#6084a4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="flex-wrap flex items-center justify-evenly w-full gap-5 base:mb-5">
          <div className="flex flex-col items-center justify-center min-w-[200px] ">
            <h2 className="text-3xl font-semibold text-primary_green">180K</h2>
            <p className="text-[#6084a4] text-sm">Downloaded</p>
          </div>
          <div className="flex flex-col items-center justify-center  min-w-[200px] ">
            <h2 className="text-3xl font-semibold text-primary_green">20K</h2>
            <p className="text-[#6084a4] text-sm">Feedback</p>
          </div>
          <div className="flex flex-col items-center justify-center  min-w-[200px] ">
            <h2 className="text-3xl font-semibold text-primary_green">500K</h2>
            <p className="text-[#6084a4] text-sm">Workers</p>
          </div>
          <div className="flex flex-col items-center justify-center  min-w-[200px] ">
            <h2 className="text-3xl font-semibold text-primary_green">70K</h2>
            <p className="text-[#6084a4] text-sm">Contributors</p>
          </div>
        </div>
        <div className=" flex items-center w-full max-w-[700px] base:justify-center  base:gap-5  justify-between border-[1px] border-dashed border-[#ebebeb] base:p-5 p-10 rounded flex-wrap">
          <div className="flex base:items-center items-start justify-center flex-col leading-10">
            <h3 className="text-darker_text font-medium text-lg base:text-base">
              Have Any Questions About Us?
            </h3>
            <p className="text-dark_text text-xs base:text-[10px]">
              Don't hesitate to contact us
            </p>
          </div>
          <div className="flex items-start justify-center">
            <ButtonWidget
              title="CONTACT US"
              containerStyles="before:duration-1000 after:duration-1000 before:bg-primary_green after:bg-primary_green text-white bg-primary_purple ButtonWidget  text-[.9rem] shadow-primary_green/50 hover:shadow-xl z-10 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunFacts