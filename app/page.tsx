import Hero from "@/components/Hero";
import Features from "@/components/home/Features";
import Feedback from "@/components/home/Feedback";
import Feedback2 from "@/components/home/Feedback2";
import FunFacts from "@/components/home/FunFacts";
import HowTo from "@/components/home/HowTo";
import ManageIot from "@/components/home/ManageIot";
import NewsBlog from "@/components/home/NewsBlog";
import OurServices from "@/components/home/OurServices";
import OurTeam from "@/components/home/OurTeam";
import Partners from "@/components/home/Partners";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <section>
      <Hero />
      </section>

      <section>
      <Partners/>
      </section>

      <section>
      <OurServices/>
      </section>

      <section>
        <ManageIot/>
      </section>

       <section>
        <FunFacts/>
       </section>

       <section>
        <Features/>
       </section>

       <section>
        <HowTo/>
       </section>

       <section>
        <OurTeam/>
       </section>
       
       <section>
        <Feedback2/>
       </section>
       
       <section>
        <WhyChooseUs/>
       </section>
       
       <section>
        <NewsBlog/>
       </section>
       
    </main>
  );
}
