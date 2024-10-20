"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import bg from "/public/imgs/backgroundImage.png";
import Circle from "../components/Circle";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import HomeButton from "../components/HomeButton";

const dmsans = DM_Sans({
  subsets: ["latin"],
  // weight: [400, 700],
});

const Page = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    // Assuming your previous animations are managed here
    // Simulate timing for when the logo should move up and text should appear

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div className={`${dmsans.className} text-white font-bold tracking-tight`}>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>

      <div className="absolute top-[10%] left-[70px] cursor-pointer">
        <HomeButton />
      </div>

      <div
        className="
      relative 
      grid 
      grid-cols-3 
      ml-auto 
      mr-auto 
      min-h-screen 
      2xl:w-[1200px] 
      xl:w-[1000px] 
      lg:w-[900px] 
      md:w-[720px] 

      "
      >
        {/* <!-- Column 1 --> */}
        <div
          class="flex flex-col 
          2xl:gap-24 
          xl:gap-20 
          lg:gap-18
          md:gap-16
          w-full h-full  items-center justify-center"
        >
          {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
          <Link href="/about">
            <Circle text="About AU" />
          </Link>
          <Link href="/demographics">
            <Circle text="Demographics" />
          </Link>
        </div>

        {/* <!-- Column 2 --> */}
        <div
          class="flex flex-col gap-40 
          2xl:gap-40 
          xl:gap-35 
          lg:gap-30
          md:gap-25 w-full h-full  items-center justify-center"
        >
          {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
          <Link href="/doms">
            <Circle text="DOMS" />
          </Link>
          <div className="md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            About DOMS AU
          </div>
          <Link href="/professors">
            <Circle text="Faculty" />
          </Link>
        </div>

        {/* <!-- Column 3 --> */}
        <div
          class="flex flex-col 2xl:gap-24 
          xl:gap-20 
          lg:gap-18
          md:gap-16 w-full h-full  items-center justify-center"
        >
          {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
          <Link href="/scroll">
            <Circle text="Learning Journey" />
          </Link>
          <Link href="/students">
            <Circle text="Student" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
