import Image from 'next/image';
import HeroBg from '.././utils/images/hero-bg.png'
import HeroBgBackground from '.././utils/images/hero-bg-background.png'
import ButtonWidget from '@/widgets/ButtonWidget';
const Hero = () => {
    return (
      <div className="flex w-full items-center justify-center h-full pb-10   lg:h-[600px]">
        <div className="w-full max-width grid cols gri grid-cols-2 base:grid-cols-1 base:gap-5  flex-wrap items-center justify-between box-border  ">
          <div className="bg-[] w-full base:max-w-full max-w-[450px] flex-col tablet:items-center items-start justify-start flex bg--500 gap-3 h-full ">
            <div className="tablet:text-center">
              <p className="text-md font-medium text-primary_green">
                Internet Of Things
              </p>
            </div>
            <div className="">
              <h2 className="text-[44px] tablet:text-[24px] tablet:text-center text-[#0e314c] font-medium lead leading-[3rem]">
                We get it! IoT growth is happening
              </h2>
            </div>
            <div>
              <p className="text-dark_text max-w-3xl tablet:text-center text-[.88rem] leading-6">
                At this point, it may seem like overkill to point out the
                continued growth bound to happen in the Internet of Things space
                for the years to come and how it will create new opportunities
                for companies, both established and new, from a hardware and
                software perspective.
              </p>
            </div>
            <div>
              <div className="b before:hover:n before:contents-[''] before:absolute before:bg-black before:w-10 z-40 h-full translate-x-1/2 hidden  from-primary_purple bg-gradient-to-r to-primary_green ease-in-out animation-direction:reverse "></div>
              <ButtonWidget
                title="GET STARTED"
                containerStyles="before:duration-1000 after:duration-1000 before:bg-primary_purple after:bg-primary_purple text-white bg-primary_green ButtonWidget  text-[.9rem] shadow-primary_green/50 shadow-lg z-10 ease-in-out w-40 py-4 py-[12px] px-8"
              />
            </div>
          </div>
          <div className="flex medium:mt-10 w-full base:max-w-full items-center justify-center basis-700px] bg-sate-600 -600 xl:mx-w-2xl  max--md min-w-[450px] medium:min-w-0  h-full">
            <div className=" w-full bg-re-700 bg-blck relative h-full flex items-center justify-center base:max-w-xl">
              <Image
                src={HeroBg}
                className="w-full object-contain h-full z-20"
                alt="hero"
              />
              <div className="absolute bg-blak top-10  z-10 xl:-ml-[100px] -ml-[30px] ">
                <Image
                  src={HeroBgBackground}
                  className="w-full tablet:hidden object-contain top-0 h-full "
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero