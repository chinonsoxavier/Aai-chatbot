"use client";
import { OurFeedbacks } from "@/constants";
import { FeedbacksInterface } from "@/interface";
import AnimationWidget from "@/widgets/AnimationWidget";
import BigText from "@/widgets/BigText";
import Text from "@/widgets/Text";
import Image from "next/image";
import { ChildNode } from "postcss";
import React, { useEffect, useState, useRef } from "react";

const Feedback2: React.FC = () => {
  const length = OurFeedbacks.length;
  const slideIndex = { index: null };
  const middleItem = Math.floor(length / 2);
  const sliderArrayIndex = OurFeedbacks.map((item, index) => ({
    ...item,
    originalIndex: index,
  }));
  const firstHalf = sliderArrayIndex.slice(0, middleItem);
  const secondHalf = sliderArrayIndex.slice(middleItem);
  const sliderArray = [...secondHalf, ...sliderArrayIndex, ...firstHalf];
  console.log(sliderArray);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(9);
  const [currentPagWidth, setCurrentPagWidth] = useState(0);
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
  const [currentSlideData, setCurrentSlideData] = useState({
    image: "",
    name: "",
    department: "",
  });

  const SliderRef = useRef<(HTMLDivElement | null)[]>([]);
  const SliderConRef = useRef<HTMLDivElement | null>(null);
  const SliderCloneConRef = useRef<HTMLDivElement | null>(null);
  const SliderRefParent = useRef<HTMLDivElement>(null);
  const sliderRefWrapper = useRef<HTMLDivElement>(null);
  const slidesPerPage = 7;
  //   let sliderArray: FeedbacksInterface[] = OurFeedbacks;
  const [currentSlidesArray, setCurrentSlidesArray] = useState<[] | null>([]);
  //   console.log(sliderArray);
  //   const feedbackSlide = document.querySelectorAll(".feedbackSlide");
  let clonedChild = false;

  const changeSlide = (slide: any) => {
    setCurrentSlide(slide);
  };
  const nextSlide = () => {
    setCurrentSlide2(currentSlide > 0 ? currentSlide - 1 : 9);
    setCurrentSlide(
      currentSlide <= OurFeedbacks.length + firstHalf.length
        ? currentSlide + 1
        : 0
    );
  };
  const prevSlide = () => {};
  const getWidth = () => {
    return (
      sliderRefWrapper?.current?.clientWidth &&
      sliderRefWrapper?.current?.clientWidth / slidesPerPage
    );
  };

  useEffect(() => {
    SliderRef.current.forEach((element) => {
      if (element && sliderRefWrapper.current) {
        element.style.width = `${getWidth()}px`;
        setCurrentPagWidth(element?.clientWidth);
      }
    });
  }, []);
  console.log(Math.floor(slidesPerPage / 2));

  const animateSlide = () => {
    console.log("next slide", currentSlide);
    //  SliderRef.current.forEach((element) => {
    //    if (element && sliderRefWrapper.current) {
    //     const animation = element.animate(
    //       [
    //         {
    //           transform: `translateX(${currentSlide * currentPagWidth}px)`,
    //         },
    //       ],
    //       {
    //         duration: 1000,
    //         delay: 1000,
    //         fill: "forwards",
    //         // iterations: Infinity,
    //         // easing:"steps(9,end)"
    //       }
    //     )
    //    }
    //  });
    // if(SliderConRef.current){
    //     SliderConRef.current.style.transform=`translateX(-${Math.floor(slidesPerPage/2 * currentPagWidth)})`
    // }

    const animation =
      currentSlide <= 7
        ? SliderConRef.current?.animate(
            [
              {
                transform: `translateX(-${7 * currentPagWidth}px)`,
              },
            ],
            {
              duration: 0,
              delay: 0,
              fill: "forwards",
              // iterations: Infinity,
              // easing:"steps(9,end)"
            }
          )
        : SliderConRef.current?.animate(
            [
              {
                transform: `translateX(-${currentSlide * currentPagWidth}px)`,
              },
            ],
            {
              duration: 1000,
              delay: 1000,
              fill: "forwards",
              // iterations: Infinity,
              // easing:"steps(9,end)"
            }
          );
    // : SliderConRef.current?.animate(
    //     [
    //       {
    //         transform: `translateX(-${currentSlide * currentPagWidth}px)`,
    //       },
    //     ],
    //     {
    //       duration: 0,
    //       delay: 0,
    //       fill: "forwards",
    //       // iterations: Infinity,
    //       // easing:"steps(9,end)"
    //     }
    //   );
    // const animation2 = SliderCloneConRef?.current?.animate(
    //   [
    //     {
    //       transform: `translateX(${currentSlide * currentPagWidth}px)`,
    //     },
    //     {
    //       display:'flex'
    //     },
    //   ],
    //   {
    //     duration: 1000,
    //     delay: 1000,
    //     fill: "forwards",
    //     // iterations: Infinity,
    //     // easing:"steps(9,end)"
    //   }
    // );

    animation?.addEventListener("finish", () => {
      // alert("hjvhj")

      nextSlide();
    });

    // animation?.finished.finally(()=>{
    //     console.log("hjvhvhh")
    // });

    // console.log(SliderConRef.current?.getAnimations);

    // animation?.finished.then(() => {
    //   nextSlide();
    //   console.log("finished");
    // });
  };
  useEffect(() => {
    animateSlide();
    console.log(currentSlide);
    //  ourFeedbacks = ourFeedbacks[ourFeedbacks.length - 1];
  }, [currentSlide]);

  useEffect(() => {
    if (
      SliderRefParent.current &&
      SliderConRef.current &&
      clonedChild === false
    ) {
      const clonedChild = SliderConRef.current.cloneNode(true);
      const cloneDiv = clonedChild;
      SliderCloneConRef.current = cloneDiv as HTMLDivElement;
      //   SliderRefParent.current.appendChild(cloneDiv);
    }
    clonedChild = true;
    const length = OurFeedbacks.length;
    const middleItem = Math.floor(length / 2);
    const firstHalf = OurFeedbacks.slice(0, middleItem);
    const secondHalf = OurFeedbacks.slice(middleItem);
    const updateSlider = [...secondHalf, ...OurFeedbacks, ...firstHalf];
    // setCurrentSlidesArray([...updateSlider.slice()]);
    console.log(sliderArray);
    // setCurrentSlide(firstHalf.length);
  }, []);

  //   useEffect(() => {
  //     let children: any = [];
  //     children = SliderConRef.current?.childNodes;
  //     const childNodes = Array.from(children);
  //     const firstChild: any = childNodes[0];
  //     const middleItem = Math.ceil(children.length / 2);
  //     const firstHalf = childNodes.slice(0, middleItem);
  //     const secondHalf = childNodes.slice(middleItem);
  //     const newNodes = secondHalf.map((child: any) =>
  //       document.createElement("div")
  //     );

  //     console.log(firstHalf, secondHalf);
  //     if (clonedChild === false && SliderConRef.current) {
  //       const lastChild = SliderConRef.current.lastChild;
  //       secondHalf.forEach((node: any) => {
  //         // if (lastChild) {
  //           SliderConRef.current?.insertBefore(node, lastChild.nextSibling);
  //           console.log(SliderConRef.current?.childElementCount)
  //         // } else {
  //         //   SliderConRef.current?.appendChild(node); // Handle case where there's no lastChild
  //         // }
  //       });
  //     //   firstHalf.forEach((node: any) => {
  //     //     SliderConRef.current?.appendChild(node);
  //     //   });
  //     }

  //     console.log(SliderConRef.current?.children)
  //     clonedChild = true;
  //     //    const children = Array.from(SliderConRef.current?.childNodes);
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
        <div className="bg-white py-8 mt-8 px-10 rounded flex items-start justify-between max-w-3xl w-full gap-5 relative  ">
          <div className="absolute w-full flex items-center justify-center before:absolute before:w-[40px] before:bg-white before:h-10 before:bottom-[-20px] before:rotate-45 h-10 bottom-0 left-0"></div>
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
            <p className="text-[15px] mt-5 text-dark_text font-light ">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-center mt-16 relative h-full w-full max-w-3xl  "
          ref={sliderRefWrapper}
        >
          <div
            className={`flex items-center justify-center absolute border hover:border-none hover:text-white hover:bg-primary_green border-black cursor-pointer p-2 w-11 h-11 rounded-full transition duration-300 left-0 z-10`}
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
          <div className="flex items-start justify-start text-[red]  overflow-x-hidden">
            <div
              className=" flex items-center justify-center"
              ref={SliderRefParent}
            >
              <div
                ref={SliderConRef}
                id="feedback_slider"
                className="feedback_slider bg-back flex items-center justify-center w-full "
              >
                {sliderArray.map((feadbacks, index) => (
                  <div
                    className={`flex ${
                      feadbacks.name
                    } feedbackSlide items-center justify-center  box-border p3 rounded-[50%] p-3  ${
                      feadbacks === currentSlideData
                        ? "opacity-100"
                        : "opacity-10"
                    }`}
                    key={index}
                    ref={(e) => (SliderRef.current[index] = e)}
                    onClick={(index) => changeSlide(index)}
                    // dataKey={index}
                  >
                    <div
                      className={`border-[3px] border-primary_green flex items-center justify-center p-1 box-border rounded-full h-full w-full `}
                    >
                      <Image
                        src={feadbacks.image}
                        alt={feadbacks.name}
                        className="object-contain w-full h-full rounded-full"
                      />
                    </div>
                    {feadbacks.name === "Lisa Sauermann last" && feadbacks.name}
                  </div>
                ))}
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

export default Feedback2;
