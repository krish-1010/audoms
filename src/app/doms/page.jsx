"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
// import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import doms from "/public/imgs/doms.png";
import Circle from "../components/Circle";
import Link from "next/link";
import styled from "styled-components";
import CircleButton from "../components/CircleButton";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";

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

      <div className="absolute z-50 top-[10%] left-[70px] cursor-pointer">
        <BackButton />
      </div>

      <div className="absolute z-50 top-[10%] left-[50%] transform translate-x-1/2">
        <HomeButton />
      </div>

      <div className="absolute top-[45%] right-[-50px]">
        <Link href="/scroll">
          <CircleButton text="Learning Journey" />
        </Link>
      </div>

      <div className="flex min-h-screen items-center">
        <div className="relative w-[75%] h-[50vh] mx-auto flex-col-reverse md:grid md:grid-rows-10 md:grid-cols-10 md:flex-row xl:grid-cols-10">
          <div className="xl:col-span-6 md:row-span-4 p-0 m-0 h-fit md:col-span-10 xl:px-20 xl:py-10">
            <div className="flex flex-col xl:h-full justify-center xl:gap-4">
              <h1 className="md:text-2xl  lg:text-xl xl:text-4xl md:text-center xl:text-left font-bold">
                About DOMS
              </h1>
              <p className="xl:text-xl md:text-center xl:text-left">
                DOMS at Anna University, founded in 1981, is renowned for
                shaping future-ready management professionals. With a focus on
                ethical leadership and industry collaboration, it&apos;s a go-to
                for aspiring managers. The department aims to produce socially
                responsible, specialized graduates with a strong moral compass
                and cutting-edge skills.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="relative md:col-start-4 row-span-6 col-span-5 xl:row-span-10 xl:col-span-4">
            <Image src={doms} fill alt="au" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
