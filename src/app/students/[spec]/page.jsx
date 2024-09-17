"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import bg from "/public/imgs/backgroundImage.png";
import Circle from "../../components/Circle";
import Link from "next/link";



const Page = ({spec}) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    // Assuming your previous animations are managed here
    // Simulate timing for when the logo should move up and text should appear

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div className={` font-bold tracking-tight`}>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <div className="relative grid grid-cols-3 ml-auto mr-auto min-h-screen w-[1200px] ">
        {/* <!-- Column 1 --> */}
        <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
          {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
          <Link href="/about">
            <Circle text="About AU" />
          </Link>
          <Link href="/demographics">
            <Circle text="Demographics" />
          </Link>
        </div>

        {/* <!-- Column 2 --> */}
        <div class="flex flex-col gap-40 w-full h-full  items-center justify-center">
          {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
          <Link href="/doms">
            <Circle text="DOMS" />
          </Link>
          <div className="text-5xl font-bold">About DOMS AU</div>
          <Link href="/professors">
            <Circle text="Faculty" />
          </Link>
        </div>

        {/* <!-- Column 3 --> */}
        <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
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
