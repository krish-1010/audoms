"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
// import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import doms from "/public/imgs/doms.png";
import Circle from "../components/Circle";
import Link from "next/link";
import styled from "styled-components";

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
          <StyledWrapper>
            <div className="spinner">
              <div className="loading-bar">{"Learning Journey"}</div>
            </div>
          </StyledWrapper>
        </Link>
      </div>

      <div className="flex min-h-screen items-center">
        <div className="relative w-[75%] h-[50vh] mx-auto flex-col-reverse md:grid md:grid-rows-10 md:grid-cols-10 md:flex-row xl:grid-cols-10">
          <div className="xl:col-span-6 md:row-span-4 p-0 m-0 h-fit md:col-span-10 xl:px-20 xl:py-10">
            <div className="flex flex-col xl:h-full justify-center xl:gap-4">
              <h1 className="xl:text-4xl md:text-center xl:text-left font-bold">
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

const StyledWrapper = styled.div`
  .loading-bar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background: transparent;
    border: 2px solid #3c3c3c;
    border-radius: 50%;
    text-align: center;
    // line-height: 111px;
    // font-family: sans-serif;
    font-size: 20px;
    color: #ffffff;
    // letter-spacing: 3px;
    // text-transform: uppercase;
    text-shadow: 0 0 20px #ffffff;
    box-shadow: 0px 0px 15px 15px rgba(255, 255, 255, 0.9);
  }

  // .loading-bar:after {
  //   content: "";
  //   position: absolute;
  //   top: -40px;
  //   left: -40px;
  //   width: 140%;
  //   height: 140%;
  //   border: 15px solid transparent;
  //   border-top: 15px solid #0055aa;
  //   border-right: 15px solid #0055aa;
  //   border-radius: 50%;
  //   animation: animateC 2s linear infinite;
  // }

  .spinner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 220px;
    overflow: hidden; // Ensures no overflow if pseudo-element is larger than parent
  }

  .spinner::before {
    content: "";
    position: absolute;
    z-index: 1; // Ensure the spinner is above the pseudo-element
    width: 100%; // Match the dimensions of the spinner
    height: 100%;
    background: url("/imgs/loader.png") no-repeat center center;
    background-size: cover;
    animation: spin 2s linear infinite; // Apply the spinning animation
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(405deg);
    }
  }
`;

export default Page;
