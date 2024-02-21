import Image from "next/image";
import ButtonWidget from "@/widgets/ButtonWidget";
import { IotFeaturedImage } from "@/constants/exports";

const HowTo = () => {
  return (
    <div className="bg- w-full h-full py-20 flex items-center justify-center ">
      <div className="max-width flex items-center justify-center flex-wrap base:gap-7">
        <div className="flex items-center justify-center fle1">
          <div className="flex items-center justify-center">
            <Image
              src={IotFeaturedImage}
              alt="iot featured image"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-1 items-start justify-between h-full flex-col gap-6  base:items-center base:justify-center ">
          <h2 className="text-darker_text font-medium text-2xl base:text-xl base:text-center">
            How Can Your City Use IoT Technology?{" "}
          </h2>
          <p className="text-dark_text text-[14px] font-light base:text-xs base:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus.
          </p>
          <p className="text-dark_text text-[14px] font-light base:text-xs base:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus.
          </p>
          <ButtonWidget
            title="explore more"
            containerStyles="before:duration-1000 after:duration-1000 before:bg-primary_purple after:bg-primary_purple text-white bg-primary_green ButtonWidget  text-[.9rem] shadow-primary_green/50 shadow-lg z-10 ease-in-out capitalize"
          />
        </div>
      </div>
    </div>
  );
};

export default HowTo;
