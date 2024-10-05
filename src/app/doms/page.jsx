"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
// import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import doms from "/public/imgs/doms.png";
import Circle from "../components/Circle";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Page = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    const img = imgRef.current;

    const tl = gsap.timeline();

    tl.to(img, { scale: 3, rotate: -45, duration: 1 });
    // .to(imgRef, { y: 50, duration: 1 })
    // .from(imgRef, { opacity: 0, duration: 1 });
  }, []);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div>
      <div ref={imgRef} className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>

      <div className="absolute top-[45%] right-[-50px]">
        <Link href="/scroll">
          <Circle text="Learning Journey"></Circle>
        </Link>
      </div>

      <div className="flex min-h-screen items-center">
        <div className="relative w-[75%] h-[500px] mx-auto flex-col-reverse grid grid-cols-10">
          <div className="col-span-6 px-20 py-10">
            <div className="flex flex-col h-full justify-center gap-4">
              <h1 className="text-4xl font-bold">About DOMS</h1>
              <p className="text-xl">
                DOMS at Anna University, founded in 1981, is renowned for
                shaping future-ready management professionals. With a focus on
                ethical leadership and industry collaboration, it’s a go-to for
                aspiring managers. The department aims to produce socially
                responsible, specialized graduates with a strong moral compass
                and cutting-edge skills.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="relative col-span-4">
            <Image src={doms} fill alt="au" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
