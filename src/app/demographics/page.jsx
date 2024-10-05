"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import Svg1 from "./Svg1";
import Svg2 from "./Svg2";

const Page = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  const headingRef = useRef(null);
  const h2Ref = useRef(null);
  const divFRef = useRef(null);
  const divSRef = useRef(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(
      [headingRef.current, h2Ref.current, divFRef.current, divSRef.current],
      { opacity: 0 }
    );

    // Animation sequence
    const tl = gsap.timeline();
    tl.to(headingRef.current, {
      duration: 3,
      opacity: 1,
      y: "-370",
      ease: "power2.out",
      onComplete: () => {
        setTimeout(() => {
          router.push("/students");
        }, 15000);
      },
    })
      .to(divFRef.current, { duration: 3, opacity: 1, ease: "power2.inOut" })
      .to([headingRef.current, divFRef.current], { duration: 3, opacity: 0 })
      .to(h2Ref.current, {
        delay: 1,
        duration: 3,
        opacity: 1,
        y: "-370",
        ease: "power2.out",
      })
      .to(divSRef.current, { duration: 3, opacity: 1, ease: "power2.inOut" });
  }, []);

  return (
    <div className="font-bold tracking-tight flex justify-center items-center h-screen">
      <div className="absolute w-full h-full bg-background-pattern bg-repeat bg-center bg-cover z-[-1]">
        {/* Background */}
      </div>

      <div className={`${visible ? "block" : "hidden"}`}>
        <h1
          className="text-4xl absolute top-[50%] text-center"
          ref={headingRef}
        >
          Celebrating diverse demographics Student spectra
        </h1>
        <h1 className="text-4xl h2 absolute top-[50%] text-center" ref={h2Ref}>
          Celebrating diverse demographics Student spectra
        </h1>

        <div className="w-full h-screen grid place-items-center">
          <div ref={divFRef} className="f">
            <Svg1 />
          </div>
          <div ref={divSRef} className="s absolute">
            <Svg2 />
            {/* Placeholder for second div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
