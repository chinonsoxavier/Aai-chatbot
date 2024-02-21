import { Why_ChooseUs } from "@/constants";
import AnimationWidget from "@/widgets/AnimationWidget";
import BigText from "@/widgets/BigText";
import Text from "@/widgets/Text";
import Image from "next/image";
import React ,{useState}from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {

      


  return (
    <div className="why_choose_us relative w-full flex items-center justify-center pt-20 base:pt-10">
      <div className="flex items-center justify-center flex-col w-full max-width">
        <BigText text="Why We Are Best From Others" textStyles="text-white base:text-2xl base:text-center" />
        <AnimationWidget />
        <Text
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          textStyles="text-white max-w-2xl text-center base:text-xs"
        />
        <div className="flex flex-wrap -mb-[10%] items-center base:py-5 md:py-10 w-full justify-center  gap-5 relative">
          {Why_ChooseUs.map((item, index) => (
          <WhyChooseUsCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
