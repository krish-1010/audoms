// components/ScrollingComponent.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingComponent = () => {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const sections = gsap.utils.toArray(
        containerRef.current.querySelectorAll("section")
      );
      setupScrolling(sections);
    } else {
      console.error("Container ref is not attached to a DOM element.");
    }
  }, []);

  const setupScrolling = (sections) => {
    gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        pin: true,
        start: "top top",
        end: () => "+=" + containerRef.current.scrollWidth,
      },
    });

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { x: () => index * window.innerWidth }, // Starting position
        {
          x: 0, // End position
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: "+=100%",
            scrub: true,
            markers: true,
          },
        }
      );
    });
  };

  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Scroll Through Sections
      </h1>
      <div
        ref={containerRef}
        style={{ display: "flex", width: "300vw", overflowX: "auto" }}
      >
        <section
          style={{ width: "100vw", height: "80vh", backgroundColor: "#ff6347" }}
        >
          Section 1
        </section>
        <section
          style={{ width: "100vw", height: "80vh", backgroundColor: "#4682b4" }}
        >
          Section 2
        </section>
        <section
          style={{ width: "100vw", height: "80vh", backgroundColor: "#32cd32" }}
        >
          Section 3
        </section>
      </div>
      <div
        ref={progressBarRef}
        style={{
          height: "10px",
          width: "0",
          backgroundColor: "black",
          transformOrigin: "left center",
        }}
      ></div>
    </div>
  );
};

export default ScrollingComponent;
