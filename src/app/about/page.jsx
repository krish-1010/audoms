"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
// import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import au from "/public/imgs/auimg.png";
import CircleButton from "../components/CircleButton";
import HomeButton from "../components/HomeButton";
import Link from "next/link";
import BackButton from "../components/BackButton";

const Page = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div>
      <div className="absolute min-h-screen w-full overflow-hidden">
        <Image src={bg} fill alt="background" />
      </div>

      {/* <div className="absolute top-[10%] left-[70px] cursor-pointer">
        <BackButton />
      </div> */}

      <div className="absolute top-[10%] left-[70px] cursor-pointer">
        <HomeButton />
      </div>

      <div className="absolute top-[-10px] right-[-10px]">
        <Link href="/doms">
          <CircleButton text="DoMs"></CircleButton>
        </Link>
      </div>
      <div className="flex min-h-screen items-center">
        <div className="relative w-[75%] h-[500px] mx-auto grid grid-cols-10">
          <div className="relative col-span-4">
            <Image src={au} fill alt="au" />
          </div>
          <div className="col-span-6 h-full px-20 py-10">
            <div className="flex flex-col h-full justify-center gap-4">
              <h1 className="text-4xl font-bold">About AU</h1>
              <div className="text-xl">
                Anna University, founded in 1978, is a top Tamil Nadu state
                university with an &apos;A++&apos; NAAC grade and a global rank
                of 427. It aims to be a world-class leader in tech education,
                research, and industry ties, producing skilled, ethical pros,
                and driving innovation and global impact.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
