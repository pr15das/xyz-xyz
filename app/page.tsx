import { AnimatedGradientTextDemo } from "@/components/badge";
import { BentoGridSecondDemo } from "@/components/bento";
import { CarouselDemo } from "@/components/moveing-cards";
import { NavigationMenuDemo } from "@/components/navbar";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Ripple from "@/components/ui/ripple";
import Wave from "@/components/wave";
import { WaveSVG } from "@/components/wave2";

export default function Home() {
  return (
    <>
      <div className=" flex justify-between sticky top-0 z-50 backdrop-blur-xl bg-white/20 py-3">
        <div className="flex ml-10 border-2 rounded-lg ">
          <NavigationMenuDemo />
        </div>
        <div className="flex justify-end mr-10 gap-3">
          <button className="border text-black px-6 py-2 rounded-lg text-sm">
            Sign Up
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg text-sm">
            Login
          </button>
        </div>
      </div>
      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background mt-[105px]">
        <AnimatedGradientTextDemo />
        <p className="z-10 whitespace-pre-wrap text-center text-7xl font-bold tracking-tighter text-black">
          Journal Your Career
        </p>
        <p className="text-md text-gray-400 mt-3 text-center ml-10 mr-9">
          Let xyz be the guide to your dream job Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. <br />
          Earum tempora unde optio est veniam reprehenderit, inventore animi
          fuga laborum
        </p>
        <RainbowButton className="mt-8">Get started</RainbowButton>
        <Ripple />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center bg-black text-white rounded-lg"></div>
      {/* <div className="flex justify-between">
        <Hike />
      </div> */}
      <Wave />

      <div className="flex justify-between gap-60 bg-black text-white">
        <div className="mb-12">
          <p className="text-7xl font-bold ml-20 mt-16 tracking-tighter">
            Now Connect all your experiences in one go!
          </p>

          <li className="text-md text-gray-400 mt-11 ml-20 ">
            XYZ is the perfect companion for your career needs. Simply upload
            your existing resume and start journaling your daily activities and
            experiences.
          </li>
          <li className="text-md text-gray-400 mt-10 ml-20">
            As you engage in various opportunities—such as internships,
            activities, and seminars—record your insights and learnings. You can
            also add your certificates and achievements along the way.
          </li>
          <li className="text-md text-gray-400 mt-10 ml-20">
            When its time to apply for a job, our AI will intelligently curate
            the best experiences tailored for that position based on your data.
            Plus, it will provide you with a summary and key pointers to help
            you prepare for your interview.
          </li>
        </div>
        <div className="mr-20 mt-20">
          <CarouselDemo />
        </div>
      </div>
      <WaveSVG />
      <div>
        <p className="text-center text-bold tracking-tighter text-6xl mt-10 mb-10">Top Features</p>
        <BentoGridSecondDemo/>
      </div>
      <div className="mt-96 mb-20 text-center text-gray-400">Design & Build by Priyangshu and Avhi</div>
    </>
  );
}
