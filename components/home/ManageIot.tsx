import Image from "next/image";

import ButtonWidget from "@/widgets/ButtonWidget";
import { CircleShape, connectIot, connectIotCta } from "@/constants/exports";

const ManageIot = () => {
  return (
    <div className="container-reverse relative bg-[#0f054b] py-20 text-white ">
      <div className="absolute top-0 left-0 h-full  base:h-1/2 base: ">
        <Image
          src={CircleShape} 
          alt="circle shape"
          className=" left-0 z-50 object-contain w-full h-full"
        />
      </div>
      <div className="max-width base:gap-6 flex flex-wrap relative items-center justify-center flex-1">
        <div className="relative basis-[600px]">
          <div className="">
            <Image
              src={connectIot}
              alt="connect iot banner"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-start base:items-center justify-center gap-5 base py-1 flex-1">
          <div>
            <h1 className="text text-2xl font-medium base:text-center">
              Connect and Manage your IoT at Scale
            </h1>
          </div>
          <div>
            <p className="text-sm opacity-95 leading-7 base:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div>
            <ButtonWidget
              title="GET STARTED"
              containerStyles="before:duration-1000 after:duration-1000 before:bg-primary_purple after:bg-primary_purple text-white bg-primary_green ButtonWidget  text-[.9rem] shadow-md shadow-primary_green/50 z-10 ease-in-out w-50"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 base:bottom-0 base:top-auto base:h-1/2 right-0 h-full ">
        <Image
          src={connectIotCta}
          alt="circle shape"
          className=" left-0 z-50 object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default ManageIot;
