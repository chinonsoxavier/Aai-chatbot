// import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
import { partners as PartnersData } from "@/constants";
import Image from "next/image";
import {useState} from "react"

const PartnersSlider = () => {
    const [hoveredPartner, setHoversPartner] = useState("");
    const handleMouseEvent = (
      partner?: string | undefined,
      eventType?: "enter" | "leave"
    ) => {
      if (eventType === "leave") setHoversPartner("");
      else if (partner) setHoversPartner(partner);
    };

      const settings = {
        dots: false,
        navigator: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        
      };
  return (
    <div className="flex items-center justify-center">
      {/* <Slider
        {...settings}
        className="flex items-center justify-center w-full bg-lack"
      > */}
        {PartnersData.map((partner, index) => (
          <div
            onMouseEnter={() => handleMouseEvent(partner.title, "enter")}
            onMouseLeave={() => handleMouseEvent("", "leave")}
            className="flex items-center justify-center flex-col w-full gap-4 relative bg-black  h-10 "
            key={partner.title}
            // ref={(ref) => (sliderElement.current[index] = ref)}
          >
            gvsdfgvfdsvdvdvd
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
      {/* </Slider> */}
    </div>
  );
};

export default PartnersSlider;
