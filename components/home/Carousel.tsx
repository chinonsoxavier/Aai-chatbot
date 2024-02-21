import { partners } from '@/constants';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const InfiniteSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      isDragging = true;
      startPosition = event.touches[0].clientX;
      prevTranslate = currentTranslate;
      sliderRef.current.classList.add('grabbing');
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (sliderRef.current) {
      const currentPosition = event.touches[0].clientX;
      currentTranslate = prevTranslate + currentPosition - startPosition;
      sliderRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const handleTouchEnd = () => {
    isDragging = false;
    if (sliderRef.current) {
      sliderRef.current.classList.remove('grabbing');
      if (currentTranslate < -100) {
        // Move to the next slide
        currentTranslate += sliderRef.current.offsetWidth;
      } else if (currentTranslate > 100) {
        // Move to the previous slide
        currentTranslate -= sliderRef.current.offsetWidth;
      }
      sliderRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };
  const [hoveredPartner, setHoversPartner] = useState("");
  const handleMouseEvent = (
    partner?: string | undefined,
    eventType?: "enter" | "leave"
  ) => {
    if (eventType === "leave") setHoversPartner("");
    else if (partner) setHoversPartner(partner);
  };

  return (
    <div
      className="flex items-center justify-center flex-auto"
      ref={sliderRef}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {partners.map((partner) => (
        <div
          onMouseEnter={() => handleMouseEvent(partner.title, "enter")}
          onMouseLeave={() => handleMouseEvent("", "leave")}
          className="flex items-center justify-center flex-col flex-auto gap-4 relative bg-back  h-10 "
          key={partner.title}
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
      ))}{" "}
    </div>
  );
};

export default InfiniteSlider;