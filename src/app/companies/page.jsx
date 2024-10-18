"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import Company from "../components/Company";
import hodIcon from "/public/imgs/hodIcon.png";
import { companies } from "../data/companies";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const navigateWithAnimation = (url) => {
    // Start the GSAP animation
    gsap.to(overlayRef.current, {
      duration: 1,
      opacity: 0,

      ease: "power1.in",
      onComplete: () => {
        // Proceed to navigate after the animation completes
        router.push(url);
      },
    });
  };

  const bgRef = useRef(null);
  const t1Ref = useRef(null);
  const t2Ref = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setvisible(true);
  //   }, 500);

  //   document.body.classList.add("overflow-hidden");

  //   // Clean up: Remove the class when the component unmounts
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, []);

  useGSAP(() => {
    const bgi = bgRef.current;
    const t1 = t1Ref.current;
    const t2 = t2Ref.current;
    const cont = contentRef.current;
    const overlay = overlayRef.current;

    const tl = gsap.timeline({
      onStart: () => {
        document.body.classList.add("overflow-hidden");
      },
      onComplete: () => {
        document.body.classList.remove("overflow-hidden");
      },
    });

    tl.to(bgi, { scale: 3.8, rotate: 45, duration: 2, ease: "power2.inOut" })

      // Simultaneously fade and scale t1
      .from(
        t1,
        { scale: 0.5, opacity: 0, duration: 2, ease: "power2.inOut" },
        "<"
      )
      // Fade out t1 and rotate background to original after delay
      .to(t1, { opacity: 0, duration: 1 }, ">1")
      .to(bgi, { rotate: 0, duration: 2, ease: "power2.inOut" })

      // Fade in t2 as background starts to flip
      .from(
        t2,
        { scale: 0.5, opacity: 0, duration: 2, ease: "power2.inOut" },
        "<"
      )
      // Fade out t2
      // .to(t2, { opacity: 1, y: -320, duration: 1 }, ">1")
      .fromTo(
        t2,
        { top: "50%" },
        { top: "100px", opacity: 1, duration: 2, ease: "power2.inOut" },
        ">1"
      )

      // Final scale down of background and fade in content
      .to(bgi, { scale: 1, duration: 2, ease: "power2.inOut" })
      .from(cont, { opacity: 0, duration: 2, ease: "power2.inOut" }, "<")
      .to(overlay, { opacity: 1, duration: 2, ease: "power2.inOut" }, "<");
  });

  return (
    <div className="">
      <div ref={bgRef} className="w-full  h-full absolute">
        <Image src={bg} className="" fill alt="Background" layout="fill" />
        <div
          ref={overlayRef}
          className={`absolute duration-2000 inset-0 bg-black bg-opacity-75 opacity-0`}

          // style={{ backdropFilter: "blur(2px)" }}
        ></div>
      </div>
      <div className=" flex justify-center ">
        <h1
          className={`top-1/2 absolute text-center text-5xl font-bold ${
            visible ? "block" : "hidden"
          }`}
          ref={t1Ref}
        >
          See Who&apos;s Hired Our Talent, <br /> The Leading Companies That
          Trust Our Talent
        </h1>
        <h1
          className={`top-1/2 text-center absolute text-5xl mb-0 font-bold ${
            visible ? "block" : "hidden"
          }`}
          ref={t2Ref}
        >
          Joining us are our valued corporate patrons
        </h1>
        <div
          ref={contentRef}
          className={`
            grid  
            grid-cols-1
            relative 
            max-w-[2600px] 
            mt-[17rem] 
            sm:grid-cols-2 
            md:grid-cols-5 
            gap-8 ${visible ? "block" : "hidden"}`}
        >
          {companies.map((prof) => (
            <div className="max-w-[300px]" key={prof.id}>
              <div
                className="hover:cursor-pointer"
                onClick={() => navigateWithAnimation("/")}
              >
                <Company
                  img={prof.img}

                  //   domain={prof.domain}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
