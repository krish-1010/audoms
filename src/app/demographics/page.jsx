"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
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
import HomeButton from "../components/HomeButton";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [keyToggle, setKeyToggle] = useState(0);

  let settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // afterChange: (current) => {
    //   setCurrentSlide(current);
    //   if (current === 1) {
    //     // Assuming the Example component is on the second slide
    //     setExampleKey((prevKey) => prevKey + 1); // Increment the key to force remount
    //   }
    // },
    // afterChange: (current) => {
    //   // setCurrentSlide(current);
    //   // setKeyToggle((prev) => prev + 1); // Increment to ensure a new key every change
    //   setCurrentSlide(current);
    //   // Use a combination of timestamp and current slide index to ensure uniqueness
    //   setKeyToggle(`${current}-${new Date().getTime()}`);
    // },
    afterChange: (index) => {
      setCurrentSlide(index);
      setKeyToggle((oldKey) => oldKey + 1); // Ensure key is always new
    },
  };

  const [visible, setVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(true);
  const [secondVisible, setSecondVisible] = useState(false);

  // This holds the current slide index
  const [exampleKey, setExampleKey] = useState(0); // T

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
    console.log("Refs check:", h1Ref.current, firstWrapRef.current);
    if (!h1Ref.current || !firstWrapRef.current) {
      console.error("Refs are not attached");
      return;
    }

    // gsap.set(
    //   [h1Ref.current, h2Ref.current, firstWrapRef.current, revealRef.current],
    //   { opacity: 0 }
    // );

    // gsap.set(h1Ref.current, { opacity: 0 });

    const tl = gsap.timeline({
      onStart: () => {
        gsap.to(bgRef.current, {
          scale: 2.5,
          duration: 3,
          opacity: 1,
          ease: "power2.inOut",
        });
      },

      // onComplete: () => {},
    });

    tl.fromTo(
      [h1Ref.current, firstWrapRef.current],
      {
        opacity: 0,
      },
      {
        duration: 3,
        opacity: 1,
        ease: "power2.out",
      }
    ).to([revealRef.current, h2Ref.current], {
      duration: 2,
      opacity: 1,
      ease: "power2.inOut",
    });
  }, []);

  // useEffect(() => {
  //   if (revealRef.current && h1Ref.current) {
  //     const tl = gsap.timeline();
  //     tl.fromTo(
  //       revealRef.current,
  //       { opacity: 0 },
  //       { opacity: 1, duration: 1 }
  //     ).fromTo(
  //       h1Ref.current,
  //       { x: -100, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 1 }
  //     );
  //   }
  // }, [keyToggle]); // Depend on keyToggle to re-run animations

  const firstNext = () => {
    // gsap.to(
    //   [h1Ref.current, h2Ref.current, firstWrapRef.current, revealRef.current],
    //   { opacity: 0, duration: 1, ease: "power2.inOut" }
    // );

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
    <StyledWrapper>
      <div className="absolute z-50 top-[70px] left-[50px] transform translate-x-1/2">
        <HomeButton />
      </div>

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
            <div className={`${visible ? "block" : "hidden"} slideAnimation`}>
              <div key={keyToggle}>
                <h1
                  className="slideAnimation text-4xl mt-24 flex flex-row justify-center items-center w-full text-center"
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

                <h2
                  className="slideAnimation text-2xl mt-12 mb-20 w-full text-center"
                  ref={h2Ref}
                >
                  Gender diversity: *She* leads the way {`or`} (F)empower
                </h2>

                <div className="w-full h-screen flex justify-center ">
                  <div ref={firstWrapRef} className="absolute slideAnimation">
                    <FirstSvg />
                  </div>
                  <div
                    ref={revealRef}
                    className="absolute revealAnimation slideAnimation"
                  >
                    <Reveal />
                  </div>
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
                <div className="relative ">
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
                {currentSlide === 1 && <Example key={keyToggle} />}
              </div>
            </div>
            {/*  */}
          </Slider>
        </div>
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  /* Define keyframes for fading in and scaling up */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }

  /* Animation class for initial elements */
  .slideAnimation {
    animation: fadeIn 1s ease-out, scaleUp 1s ease-out;
  }

  /* Additional class for the Reveal component with a delay */
  .revealAnimation {
    opacity: 0;
  }

  .revealAnimation {
    animation: fadeIn 1.5s ease-out 1s forwards; /* Notice the 1s delay */
  }
`;
export default Page;
