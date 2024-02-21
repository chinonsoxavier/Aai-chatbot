"use client";
import Image from "next/image";
import { partners as PartnersData } from "@/constants";
import { useState, useEffect, useRef } from "react";
import { setInterval } from "timers";
import {Carousel} from 'react-responsive-carousel'

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderElement = useRef<Array<HTMLDivElement | null>>([]);
let interval :any;
  useEffect(() => {
     interval= setInterval(()=>{
       if (sliderRef.current) {
        // sliderRef.current.style.transform = `translateX(-90px)`;
      }
      console.log("works");
    },1000) ;
    const sliderElementWidth =   sliderElement.current[0]?.offsetWidth;

    // interval = setInterval(() => {
    //   if (sliderRef.current) {
    //     sliderRef.current.style.transform = `translateY(90px)`;
    //   }
    //   console.log("works");
    // }, 500);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentSlide,interval]);

  const [hoveredPartner, setHoversPartner] = useState("");
  const handleMouseEvent = (
    partner?: string | undefined,
    eventType?: "enter" | "leave"
  ) => {
    if (eventType === "leave") setHoversPartner("");
    else if (partner) setHoversPartner(partner);
  };

  return (
    <div className="w-full bg-[whitesmoke]/100 base:py-5 py-10 flex items-center justify-between flex-col">
      <div className="flex items-center justify-between w-full overflow-hidden max-width">
        <div
          id="testing"
          className="flex items-start justify-start flex-auto overflow-x-scroll overflow-y-hidden w-full custom_scrollbar"
          ref={sliderRef}
        >
          {PartnersData.map((partner, index) => (
            <div
              onMouseEnter={() => handleMouseEvent(partner.title, "enter")}
              onMouseLeave={() => handleMouseEvent("", "leave")}
              className="flex min-w-[190px] mobile:min-w-[150px] items-center justify-center flex-col flex-auto gap-4 relative bg-back  h-10 "
              key={partner.title}
              ref={(ref) => (sliderElement.current[index] = ref)}
            >
              <Image src={partner.baseImage} alt={partner.title} />
              <Image
                src={partner.image}
                alt={partner.title}
                className={`${
                  hoveredPartner !== partner.title && "translate-y-[40px]"
                } absolute duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
