import React from 'react'
import ServicesCard from './ServicesCard';
import AnimationWidget from '@/widgets/AnimationWidget';
import { OSI1, OSI2, OSI3, OSI4, OSI5, OSI6 } from '@/constants/exports';
import { Services } from '@/constants';


// const Icon2

const OurServices = () => {
  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="max-width container-reverse gap-7">
        <div className="flex items-center justify-center flex-col ">
          <h3 className="text-2xl text-[#0e314c] text-center mobile:text-lg mobile:font-medium font-semibold ">
            OUR FEATURED SERVICES THAT WE PROVIDE
          </h3>
          <AnimationWidget />
          <p className="max-w-xl text-center text-[#6084a4] leading-6 text-[15px] base:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className=" w-full gap-5 flex flex-wrap  ">
          {Services.map((service, index) => (
            <ServicesCard service={service} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices