"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import { Inter } from "next/font/google";
import styled from "styled-components";
import Circle from "../components/Circle";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const maskRef = useRef(null);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  // const sectionRef = useRef([]);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const svgRef = useRef(null);

  useGSAP(() => {
    const img = imgRef.current;

    // gsap.from(img, { scale: 3, rotate: -45, duration: 1 });

    // gsap.to(img, { scale: 2, rotate: 0, duration: 1 });

    const container = containerRef.current;
    const sections = gsap.utils.toArray(container.querySelectorAll("section"));
    const mask = maskRef.current;
    const wrapper = wrapperRef.current;

    const tl = gsap.timeline();

    tl.to(img, {
      scale: 2,
      rotate: 45,
      duration: 2,
      ease: "power2.inOut",
    }).from(wrapper, {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    });
    // Fade out t1 and rotate background to original after delay
    // .to(wrapper, { opacity: 0, duration: 1 }, ">1")
    // .set(wrapper, { css: { zIndex: -10 } });

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: "+=4200",
        // markers: true,
      },
    });

    const svg = svgRef.current;
    gsap.to(svg, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: svg,
        scrub: 1,
        end: "+=5300",
        // markers: true,
        // pinSpacing: false,
      },
    });

    // Progress bar animation
    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top left",
        scrub: 1,
      },
    });

    // Animate each section
    sections.forEach((section) => {
      let texts = section.querySelectorAll(".anim");
      if (texts.length === 0) return;

      gsap.from(texts, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          toggleActions: "restart none none none",
          start: "left center",
          // markers: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <StyledWrapper>
      <div className={`min-h-screen relative ${inter.className}`}>
        <div ref={imgRef} className="fixed top-0 left-0 w-full h-screen -z-10">
          <Image
            src={bg}
            layout="fill"
            objectFit="cover"
            alt="background"
            priority
          />
        </div>

        <div ref={wrapperRef} className="wrapper overflow-x-hidden relative">
          <div
            ref={containerRef}
            className="container  scrollx flex w-[400vw] "
          >
            <div className="absolute flex flex-col gap-2 items-center left-[40%] top-14 w-[600px]">
              <h1 className="text-5xl font-bold">Our Learning Journey</h1>
              <h2 className="text-[1.7rem] text-cyan-400 font-bold">
                Mapping the academic curriculum
              </h2>
            </div>

            <svg
              ref={svgRef}
              className="absolute top-[18em] left-[10vw] w-[300vw]"
              viewBox="0 0 900 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#152329"
              />
              <mask
                id="mask0_0_1"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={1000}
                height={200}
              >
                <path
                  d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_0_1)">
                <rect
                  ref={maskRef}
                  className="mask w-4"
                  y={-49}
                  height={99}
                  fill="#00DDFF"
                />
              </g>
            </svg>
            <section
              ref={section1Ref}
              className="section mt-10 pin sec1 w-[100vw] py-[20vw] px-[10vw]"
            >
              <span></span>
              <h1 className=" text-7xl m-0 pb-2 text-[#00DDFF]">Q1</h1>

              <div className="col flex gap-[3em]">
                <div className="text-2xl w-[50vw] ml-2">
                  <div>Management Principles and Organizational</div>
                  <div>Behavior Quantitative Techniques</div>
                  <div>Marketing Management</div>
                  <div>Accounting for Managers</div>
                </div>
                <div className="text-2xl w-[50vw]">
                  <div>Managerial Economics</div>
                  <div>Legal Systems in Business Information</div>
                  <div>Systems for Business</div>
                  <div>Soft Skills I - Executive Communication</div>
                </div>
              </div>
            </section>
            {/*  */}
            <section
              ref={section2Ref}
              className="sec2  mt-10 section w-[100vw]  py-[20vw] px-[10vw]"
            >
              {/* <span className="anim">Advanced2</span> */}
              <h1 className="anim text-7xl m-0 pb-2 text-[#00DDFF]">Q2</h1>

              <div className="col anim flex gap-[3em]">
                <div className="text-2xl anim w-[50vw] ml-2">
                  <div>Management Principles and Organizational</div>
                  <div>Behavior Quantitative Techniques</div>
                  <div>Marketing Management</div>
                  <div>Accounting for Managers</div>
                </div>
                <div className="text-2xl w-[50vw]">
                  <div>Managerial Economics</div>
                  <div>Legal Systems in Business Information</div>
                  <div>Systems for Business</div>
                  <div>Soft Skills I - Executive Communication</div>
                </div>
              </div>
            </section>
            {/*  */}
            <section
              ref={section3Ref}
              className="sec3 section  mt-10 w-[100vw] py-[20vw] px-[10vw]"
            >
              {/* <span className="anim">Advanced3</span> */}
              <h1 className="anim text-7xl m-0 pb-2 text-[#00DDFF]">Q3</h1>

              <div className="col anim flex gap-[3em]">
                <div className="text-2xl anim w-[50vw] ml-2">
                  <div>Management Principles and Organizational</div>
                  <div>Behavior Quantitative Techniques</div>
                  <div>Marketing Management</div>
                  <div>Accounting for Managers</div>
                </div>
                <div className="text-2xl w-[50vw]">
                  <div>Managerial Economics</div>
                  <div>Legal Systems in Business Information</div>
                  <div>Systems for Business</div>
                  <div>Soft Skills I - Executive Communication</div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="fixed bottom-[-70px] right-[50%]">
          <Link href="/students">
            <Circle text="Student"></Circle>
          </Link>
        </div>
        {/* <section className="bg-blue-300 h-[100vh]"></section> */}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .col::before {
    content: "";
    position: relative;
    top: 0px;
    left: 0px;
    height: 140px;
    width: 10px;
    background: #225599;
    display: block;
  }
`;
