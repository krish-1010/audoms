"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import cuicImg from "/public/imgs/cuic.png"; // Renamed to avoid confusion with ref
import { gsap } from "gsap";

const Page = () => {
  const rotateRef = useRef(null);
  const [isCuicVisible, setIsCuicVisible] = useState(false); // State for showing the CUIC content
  const cuicContentRef = useRef(null); // Ref for the CUIC content container
  const headingRef = useRef(null); // Ref for the heading

  useEffect(() => {
    setTimeout(() => {
      setIsCuicVisible(true); // Show the text
    }, 3000); // Delay for text appearance after the logo moves
  }, []);

  useEffect(() => {
    // Initial hiding of the cuic content
    gsap.set(cuicContentRef.current, { autoAlpha: 0 });

    // Scale and rotate the background
    gsap.to(rotateRef.current, {
      scale: 2.2,
      duration: 4,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(rotateRef.current, {
          rotation: 120,
          duration: 2,
          ease: "power2.inOut",
          transformOrigin: "50% 50%",
        });
      },
    });

    // Move the heading up and then show the CUIC content
    gsap
      .timeline()
      .from(headingRef.current, {
        // y: "0%", // Start from center
        autoAlpha: 1,
        duration: 2,
        ease: "power2.out",
      })
      .to(headingRef.current, {
        y: "-30vh", // Move up
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(cuicContentRef.current, {
            autoAlpha: 1, // Make the CUIC content visible
            duration: 1,
          });
        },
      });
  }, []);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover"
      // style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div
        ref={rotateRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <Image src={bg} fill alt="background" />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <h1
          ref={headingRef}
          className="text-center absolute z-20 text-white text-4xl"
        >
          Bridging Talent and Industry: About CUIC
        </h1>
        <div
          ref={cuicContentRef}
          className={`flex min-h-screen items-center ${
            isCuicVisible ? "block" : "hidden"
          }`}
        >
          <div className="relative w-[75%] h-[500px] mx-auto flex-col-reverse grid grid-cols-10">
            <div className="col-span-6 px-20 py-10">
              <div className="flex flex-col h-full justify-center">
                <div>About DOMS</div>
                <div>
                  DOMS at Anna University, founded in 1981, is renowned for
                  shaping future-ready management professionals. With a focus on
                  ethical leadership and industry collaboration, it’s a go-to
                  for aspiring managers. The department aims to produce socially
                  responsible, specialized graduates with a strong moral compass
                  and cutting-edge skills.
                </div>
              </div>
            </div>
            <div className="relative col-span-4">
              <Image src={cuicImg} fill alt="CUIC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
