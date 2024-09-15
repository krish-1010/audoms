"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import Circle from "../components/Circle";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <div className="relative grid grid-cols-3 ml-auto mr-auto min-h-screen w-[1200px] ">
        {/* <!-- Column 1 --> */}
        <div class="flex flex-col gap-20 w-full h-full  items-center justify-center">
          {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
          <Link href="/">
            <Circle text="About AU" />
          </Link>
          <Link href="/">
            <Circle text="Demograpichs" />
          </Link>
        </div>

        {/* <!-- Column 2 --> */}
        <div class="flex flex-col gap-40 w-full h-full  items-center justify-center">
          {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
          <Link href="/">
            <Circle text="DOMS" />
          </Link>
          <div>About DOMS AU</div>
          <Link href="/">
            <Circle text="Fauculty" />
          </Link>
        </div>

        {/* <!-- Column 3 --> */}
        <div class="flex flex-col gap-20 w-full h-full  items-center justify-center">
          {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
          <Link href="/">
            <Circle text="Learning Journey" />
          </Link>
          <Link href="/">
            <Circle text="Student" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
