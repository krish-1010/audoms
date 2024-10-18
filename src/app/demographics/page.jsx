"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import FirstSvg from "./FirstSvg";
import Reveal from "./Reveal";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Example from "../components/Example";

const Page = () => {
  let settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [visible, setVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(true);
  const [secondVisible, setSecondVisible] = useState(false);
  const router = useRouter();

  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const firstWrapRef = useRef(null);
  const revealRef = useRef(null);
  const bgRef = useRef(null);
  const oneRef = useRef(null);

  const h1Ref2 = useRef(null);
  const h2Ref2 = useRef(null);
  const firstWrapRef2 = useRef(null);
  const revealRef2 = useRef(null);
  const bgRef2 = useRef(null);
  const oneRef2 = useRef(null);

  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);

    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useGSAP(() => {
    gsap.set(
      [h1Ref.current, h2Ref.current, firstWrapRef.current, revealRef.current],
      { opacity: 0 }
    );

    const tl = gsap.timeline({
      onStart: () => {
        gsap.to(bgRef.current, {
          scale: 2.5,
          duration: 3,
          opacity: 1,
          ease: "power2.inOut",
        });
      },

      onComplete: () => {},
    });

    tl.to([h1Ref.current, firstWrapRef.current], {
      duration: 3,
      opacity: 1,
      ease: "power2.out",
    }).to([revealRef.current, h2Ref.current], {
      duration: 2,
      opacity: 1,
      ease: "power2.inOut",
    });
  }, []);

  const firstNext = () => {
    gsap.to(
      [h1Ref.current, h2Ref.current, firstWrapRef.current, revealRef.current],
      { opacity: 0, duration: 1, ease: "power2.inOut" }
    );

    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const firstPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const SecondNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const SecondPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div
      ref={oneRef}
      className={`font-bold tracking-tight flex justify-center h-screen overflow-hidden`}
    >
      <div
        ref={bgRef}
        className="absolute w-full h-full bg-background-pattern bg-repeat bg-center bg-cover z-[-1]"
      >
        {/* Background */}
      </div>
      <div className="w-[1200px]">
        <Slider className="relative" {...settings} ref={sliderRef}>
          <div className={`${visible ? "block" : "hidden"}`}>
            <h1
              className="text-4xl mt-24 flex flex-row justify-center items-center w-full text-center"
              ref={h1Ref}
            >
              <div className="relative left-[-30px]">
                <TbPlayerTrackPrevFilled
                  fill="lightblue"
                  className="hover:cursor-pointer"
                  size={40}
                  onClick={() => firstPrevious()}
                />
              </div>
              <span>Celebrating diverse demographics Student spectra</span>
              <div className="relative right-[-30px]">
                <TbPlayerTrackNextFilled
                  fill="lightblue"
                  className="hover:cursor-pointer"
                  size={40}
                  onClick={() => firstNext()}
                />
              </div>
            </h1>

            <h2 className="text-2xl mt-12 mb-20 w-full text-center" ref={h2Ref}>
              Gender diversity: *She* leads the way {`or`} (F)empower
            </h2>

            <div className="w-full h-screen flex justify-center">
              <div ref={firstWrapRef} className="absolute">
                <FirstSvg />
              </div>
              <div ref={revealRef} className="absolute">
                <Reveal />
              </div>
            </div>
          </div>

          {/*  */}

          <div className={`${visible ? "block" : "hidden"}`}>
            <h1
              className="text-4xl mt-24 flex flex-row justify-center items-center w-full text-center"
              ref={h1Ref2}
            >
              <TbPlayerTrackPrevFilled
                fill="lightblue"
                className="hover:cursor-pointer"
                size={40}
                onClick={() => SecondPrev()}
              />
              <span>Celebrating diverse demographics Student spectra</span>
              <div className="relative left-[-30px]">
                <TbPlayerTrackNextFilled
                  fill="lightblue"
                  className="hover:cursor-pointer"
                  size={40}
                  onClick={() => SecondNext()}
                />
              </div>
            </h1>

            <h2
              className="text-2xl mt-12 mb-20 w-full text-center"
              ref={h2Ref2}
            >
              Work experience - Fresh minds, Ready to shine.
            </h2>

            <div className="w-full h-screen flex justify-center">
              <Example />
            </div>
          </div>
          {/*  */}
        </Slider>
      </div>
    </div>
  );
};

export default Page;
