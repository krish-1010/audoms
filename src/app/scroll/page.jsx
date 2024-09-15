"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const maskRef = useRef(null);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  // const sectionRef = useRef([]);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const svgRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(container.querySelectorAll("section"));
    const mask = maskRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: "+=3700",
        markers: true,
      },
    });

    const svg = svgRef.current;
    gsap.to(svg, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: svg,
        scrub: 0.5,
        end: "+=4700",
        markers: true,
        // pinSpacing: false,
      },
    });

    // Progress bar animation
    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top left",
        scrub: 0.5,
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
          markers: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="min-h-screen ">
      <div ref={wrapperRef} className="wrapper overflow-x-hidden relative">
        <div ref={containerRef} className="container scrollx flex w-[400vw] ">
          <svg
            ref={svgRef}
            className="absolute top-[12em] left-[10vw] w-[300vw]"
            viewBox="0 0 900 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
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
                className="mask w-0"
                y={-49}
                height={99}
                fill="black"
              />
            </g>
          </svg>
          <section
            ref={section1Ref}
            className="section pin sec1 w-[100vw] py-[20vw] px-[10vw]"
          >
            <span>Advanced1</span>
            <h1 className=" text-5xl m-0">Signify Elegance</h1>

            <div className="col flex gap-[3em]">
              <p className="text-xs w-[50vw]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p className="text-xs w-[50vw]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
          {/*  */}
          <section
            ref={section2Ref}
            className="sec2 section w-[100vw]  py-[20vw] px-[10vw]"
          >
            <span className="anim">Advanced2</span>
            <h1 className="anim text-5xl m-0">Signify Elegance</h1>

            <div className="anim col flex gap-[3em]">
              <p className="text-xs w-[50vw]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p className="text-xs w-[50vw]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
          {/*  */}
          <section
            ref={section3Ref}
            className="sec3 section w-[100vw] py-[20vw] px-[10vw]"
          >
            <span className="anim">Advanced3</span>
            <h1 className="anim text-5xl m-0">Signify Elegance</h1>

            <div className="anim col flex gap-[3em]">
              <p className="text-xs w-[50vw]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p className="text-xs w-[50vw]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
        </div>
      </div>
      <section className="bg-blue-300 h-[100vh]"></section>
    </div>
  );
}
