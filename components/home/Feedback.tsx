"use client";
import { OurFeedbacks } from "@/constants";
import AnimationWidget from "@/widgets/AnimationWidget";
import BigText from "@/widgets/BigText";
import Text from "@/widgets/Text";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const Feedback: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentSlideData, setCurrentSlideData] = useState({
    image: "",
    name: "",
    department: "",
  });

  const SliderRef = useRef<HTMLDivElement>(null);
  const SliderConRef = useRef<HTMLDivElement>(null);
  // const feedbackSlide = document.querySelectorAll(".feedbackSlide");
  let clonedChild = false;

  const changeSlide = (slide: any) => {
    setCurrentSlide(slide);
  };
  const nextSlide = () => {
    if (SliderRef.current) {
      if (currentSlide === OurFeedbacks.length) {
        SliderRef.current.style.transition = "none";
      }
      SliderRef.current.style.transition = ".5s";
    }
    // setCurrentSlide((prev) => (prev + 1) % OurFeedbacks.length);
    setCurrentSlide(
      currentSlide <= OurFeedbacks.length - 1 ? currentSlide + 1 : 1
    );
    // setCurrentSlide(currentSlide+1)
    console.log(currentSlide);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide >= 1 ? currentSlide - 1 : 0);
    if (SliderRef.current) {
      SliderRef.current.style.transition = "none";
      SliderRef.current.style.transform = `translateX(${currentSlide * 64}px)`;
      setTimeout(() => {
        if (SliderRef.current) {
          SliderRef.current.style.transition = ".5s";
        }
      }, 100);
    }
    // setCurrentSlide(
    //   (prev) => (prev - 1 + OurFeedbacks.length) % OurFeedbacks.length
    // );
  };

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       nextSlide();
  //     }, 3000);

  //     return () => clearInterval(intervalId);
  //   }, []);

  const startSlide = () => {
    if (SliderRef.current) {
      // nextSlide();
      SliderRef.current.style.display = "flex";

      // SliderRef.current.classList.add("infiniteTranslateOn");
      // SliderRef.current.style.animationDuration = ".8s";
      if (currentSlide === OurFeedbacks.length) {
        SliderRef.current.style.display = "none";
      }
      SliderRef.current.style.transform = `translateX(${currentSlide * 64}px)`;
      SliderRef.current.style.transition = ".5s";
      SliderRef.current.style.animationFillMode = "none";

      SliderRef.current.addEventListener("transitionend", () => {
        if (SliderRef.current) {
          SliderRef.current.style.transform = `translateX(${
            currentSlide * 64
          }px)`;
          nextSlide();
        }
      });

      //   setCurrentSlide((next)=>(next+1)% OurFeedbacks.length);
      // nextSlide();
      //   console.log("hyyvuy");
      // SliderRef.current.style.transform = `translateX(-${
      //   80 * currentSlide
      // }px`;
      // SliderRef.current.style.transition='3s all'
    }
  };
  let interval: any;
  startSlide();
  useEffect(() => {
    if (currentSlide === OurFeedbacks.length) {
      if (SliderRef.current) {
        // SliderRef.current.style.transform = "none";
        // SliderRef.current.style.transition = "0ms";
        // SliderRef.current.style.transformOrigin='0%';
        SliderRef.current.classList.add("animateremove");
        // setTimeout(() => {
        //   if (SliderRef.current) {
        //     SliderRef.current.style.display = "flex";
        //     setTimeout(() => {
        //         setCurrentSlide(0);
        //         nextSlide();
        //         startSlide();

        //     }, 2000);
        //   }
        // }, 2000);
      }

      //    if (SliderRef.current) {
      //     nextSlide();

      //     // SliderRef.current.classList.add("infiniteTranslateOn");
      //     // SliderRef.current.style.animationDuration = ".8s";

      //     SliderRef.current.style.transform = `translateX(${
      //       currentSlide * 64
      //     }px)`;
      //     SliderRef.current.style.transitionDuration = "2s";
      //     SliderRef.current.style.animationFillMode = "none";

      //     SliderRef.current.addEventListener("transitionend", () => {
      //       if (SliderRef.current) {
      //         SliderRef.current.style.transform = `translateX(${
      //           currentSlide * 64
      //         }px)`;
      //         nextSlide();
      //       }
      //     });

      //     //   setCurrentSlide((next)=>(next+1)% OurFeedbacks.length);
      //     // nextSlide();
      //     //   console.log("hyyvuy");
      //     // SliderRef.current.style.transform = `translateX(-${
      //     //   80 * currentSlide
      //     // }px`;
      //     // SliderRef.current.style.transition='3s all'
      //   }
      //   setCurrentSlide(0);
      // SliderRef.current.style.display='none';
      //   setTimeout(() => {
      //       if(SliderRef.current){
      //           SliderRef.current.style.display = "flex";
      //       }
      //   }, 1000);
      console.log("end");
      //  if(SliderRef.current){
      //      SliderRef.current.style.transition = 'none';
      //     }
      //  setTimeout(() => {
      //      if(SliderRef.current){
      //          SliderRef.current.style.transform = `translateX(${currentSlide * 64}px)`;
      //          SliderRef.current.style.transitionDuration = "2s";                //  SliderRef.current.style.transform = `translateX(${
      //     //   })`;
      //   }
      //      }, 1000);
      //      0
    }
    // item.clientWidth;
    // });
    // SliderRef.current?.addEventListener("transitionend", () => {
    //   console.log("end");
    // });
  }, [currentSlide]);

  //   useEffect(() => {
  //     feedbackSlide.forEach((item, i) => {
  //       // item.clientWidth;
  //       if (SliderRef.current) {
  //         SliderRef.current.style.transform = `translateX(-${
  //           (item.clientWidth + 19) * currentSlide
  //         }px`;
  //         // SliderRef.current.style.
  //       }
  //       // console.log(item.clientWidth);
  //     });
  //     //   interval = setInterval(nextSlide,3000)
  //     // interval= setInterval(()=>{
  //     //     nextSlide(),3000}
  //     //     )
  //     // setCurrentSlide((currentSlide) => currentSlide + 1);
  //   }, [currentSlide]);

  //   useEffect(() => {
  //     if (SliderRef.current && SliderConRef.current && clonedChild === false) {
  //         const clonedChild = SliderRef.current.cloneNode(true);
  //       SliderConRef.current.appendChild(clonedChild);

  //       console.log();
  //     }
  //     clonedChild = true;
  //   }, []);

  useEffect(() => {
    setCurrentSlideData(OurFeedbacks[0]);
  }, [currentSlide]);

  return (
    <div className="bg-[#f7fafd] py-20 w-full flex items-center justify-center">
      <div className="max-width flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <BigText text="What Users Saying" />
          <AnimationWidget />
          <div className="text-center max-w-[500px]">
            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
        </div>
        <div className="bg-white py-8 mt-8 px-10 rounded flex items-start justify-between max-w-3xl w-full gap-5 relative before:absolute before:w-[40px] before:bg-white before:left-[50%] before:h-10 before:bottom-[-20px] before:rotate-45 ">
          <div className="flex items-start justify-center ">
            <div className="flex items-center justify-center border-[3px] w-[110px] h-[110px] border-[#43e794] rounded-full p-[2px]">
              <Image
                className="flex items-center justify-center w-full h-full rounded-full object-contain"
                src={currentSlideData?.image}
                alt={currentSlideData?.name + "image"}
              />
            </div>
          </div>
          <div className="flex items-start justify-center flex-col">
            <h2 className="t text-lg text-darker_text">
              {currentSlideData.name}
            </h2>
            <p className="text-[#c679e3] font-light text-sm ">
              {currentSlideData.department}
            </p>
            {/* <Text
              textStyles="text-[#c679e3]"
              text={currentSlideData.department}
            /> */}
            <p className="text-[15px] mt-5 text-dark_text font-light ">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            {/* <Text
              textStyles="mt-5 text-bas"
              text="Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            /> */}
          </div>
        </div>
        <div className="flex items-center justify-center mt-16 relative bg-[ble] h-full w-full max-w-2xl">
          <div
            className={`flex items-center justify-center absolute border hover:border-none hover:text-white hover:bg-primary_green border-black cursor-pointer p-2 w-11 h-11 rounded-full transition duration-300 left-0 `}
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div className="flex items-start justify-start text-[red] gap-4 overflow-x-hidden">
            <div className=" flex items-start justify-start" ref={SliderConRef}>
              <div
                ref={SliderRef}
                id="feedback_slider"
                className="feedback_slider flex items-start justify-start "
              >
                {OurFeedbacks.map((feadbacks, index) => (
                  <div
                    className="flex feedbackSlide items-center justify-center border-[3px] border-primary_green p-1 px-3 h-16 rounded-full w-16"
                    key={index}
                    onClick={(index) => changeSlide(index)}
                    // ref={SliderRef}
                  >
                    <Image
                      src={feadbacks.image}
                      alt={feadbacks.name}
                      className="object-contain w-full h-full rounded-full"
                    />
                  </div>
                ))}
                {/* <div className="flex feedbackSlide items-center justify-center border-[3px] border-primary_green p-1 h-16 rounded-full w-16">
                  <Image
                    src={OurFeedbacks[0].image}
                    alt={OurFeedbacks[0].name}
                    className="object-contain w-full h-full rounded-full"
                  />
                </div>{" "}
                <div className="flex feedbackSlide items-center justify-center border-[3px] border-primary_green p-1 h-16 rounded-full w-16">
                  <Image
                    src={OurFeedbacks[OurFeedbacks.length - 1].image}
                    alt={OurFeedbacks[OurFeedbacks.length - 1].name}
                    className="object-contain w-full h-full rounded-full"
                  />
                </div>{" "} */}
              </div>
            </div>
          </div>
          <div
            className={`flex items-center justify-center absolute border hover:border-none hover:text-white hover:bg-primary_green border-black cursor-pointer p-2 w-11 h-11 rounded-full transition duration-300  right-0`}
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
