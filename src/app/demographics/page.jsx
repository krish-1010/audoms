"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page = () => {
  const headingRef = useRef(null);

  return (
    <div className={` font-bold tracking-tight`}>
      <div className="absolute w-full h-full bg-background-pattern bg-repeat bg-center bg-cover z-[-1]">
        {/* No content inside this div, it's just for the background */}
      </div>

      <h1 ref={headingRef}></h1>

      <div className="w-full h-screen "></div>
    </div>
  );
};

export default Page;
