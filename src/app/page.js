"use client";

import Image from "next/image";
import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import mainlogo from "/public/imgs/loogo.png";
import { useRouter } from "next/navigation";
import classpic from "/public/imgs/class.png";

export default function Home() {
  const bgRef = useRef(null); // Reference to the wrapper div for animation
  const bg2Ref = useRef(null); // Reference to the wrapper div for animation
  const [visible, setVisible] = useState(false);
  const [firstvisible, setFirstvisible] = useState(true);
  const [secondvisible, setSecondvisible] = useState(false);
  const [logoMoved, setLogoMoved] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const logoRef = useRef(null);
  const router = useRouter();
  const pageRef = useRef(null);

  const secondcomponent = useRef(null);
  const classref = useRef(null);
  const text2ref = useRef(null);
  const secondpageref = useRef(null);

  const textRef = useRef(null);

  useEffect(() => {
    // Assuming your previous animations are managed here
    // Simulate timing for when the logo should move up and text should appear

    setTimeout(() => {
      setTextVisible(true); // Show the text
    }, 500); // Delay for text appearance after the logo moves
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFirstvisible(false);
      setSecondvisible(true);
    }, 7000);
  }, []);

  useEffect(() => {
    // Initialize a GSAP timeline
    const tl = gsap.timeline({
      defaults: {
        duration: 1, // Adjust duration as needed
        ease: "power2.inOut", // Smooth transitions for all animations
      },
    });

    // First part: Flip (invert) the image
    tl.to(bgRef.current, {
      rotationX: 180,
    });

    // Logo scales down and centers itself
    tl.fromTo(
      logoRef.current,
      { scale: 10, xPercent: -50, yPercent: -50 },
      {
        scale: 1,
        autoAlpha: 1,
        xPercent: -50,
        yPercent: -50,
        duration: 3,
        ease: "elastic.out(1, 0.75)",
      },
      "<" // Starts at the end of the first flip
    );

    // Move the logo up slightly
    tl.to(logoRef.current, {
      y: "-30%", // Move up by 10% of its current position
      duration: 0.5, // Short duration for a quick move
      onComplete: () => setLogoMoved(true), // Trigger state change if needed
    });

    // Fade in and move down the text
    tl.fromTo(
      textRef.current,
      { autoAlpha: 0, y: "-5%", x: "-50%" }, // Start slightly above its final position
      {
        autoAlpha: 1,
        y: "100%", // Move down slightly

        duration: 0.5, // Matching duration for smooth transition
        ease: "power1.inOut",
        onComplete: () => setTextVisible(true), // Trigger text visibility
      }
    );

    // Rotate the background after the flip and scale
    tl.to(bgRef.current, {
      rotation: 180,
      delay: 0.5, // Adding a delay to separate the rotation from the flip visually
    });

    gsap.to(pageRef.current, {
      autoAlpha: 0,
      delay: 6,
      duration: 1,
      ease: "power1.inOut",
      //onComplete: () => router.push("/second"), // Navigate after fade out
    }); //inga dhan

    if (secondvisible) {
      gsap.set([bg2Ref.current, classref.current, text2ref.current], {
        autoAlpha: 0,
      });
      // Setup a timeline to fade out and navigate
      const tl2 = gsap.timeline({
        onComplete: () => router.push("/home"), // Navigate to the third page
      });

      // Animate to fade in each element
      gsap.to(bg2Ref.current, {
        autoAlpha: 1,
        delay: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(classref.current, {
        autoAlpha: 1,
        delay: 1, // Added delay to stagger the animations
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(text2ref.current, {
        autoAlpha: 1,
        delay: 1, // Added delay to stagger the animations
        duration: 1,
        ease: "power2.inOut",
      });

      // Fade out the entire page after a delay or an event
      tl2.to(secondpageref.current, {
        autoAlpha: 0,
        duration: 1,
        delay: 4, // Set this delay based on your UX needs
      });
    }
  }, [router, secondvisible]);

  if (firstvisible) {
    return (
      <main
        ref={pageRef}
        className={`min-h-screen font-[family-name:var(--font-geist-sans)] ${
          firstvisible ? "block" : "hidden"
        }`}
      >
        <div className="min-h-screen min-w-full overflow-hidden relative">
          {/* Wrapper div to apply transformation, referenced by bgRef */}
          <div ref={bgRef} className="w-full h-full absolute">
            <Image src={bg} fill alt="Background" layout="fill" />
          </div>
          {/* <div>
            <Image src={mainlogo} alt="Main Logo" width={200} height={200} />
          </div> */}
          <div
            ref={logoRef}
            className={`absolute top-1/2 left-1/2 transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={mainlogo}
              // className="opacity-0"
              alt="Main Logo"
              width={300}
              height={300}
            />
          </div>
          <div
            ref={textRef}
            className={`absolute top-1/2 left-1/2 transform transition-all duration-500 opacity-0 ${
              textVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-center text-4xl tracking-wider font-bold">
              Placement Brouchure <br /> 2024
            </p>
            <p className="text-center text-2xl font-bold">Bactch 2024 - 25</p>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <div
        ref={secondpageref}
        className="min-h-screen font-[family-name:var(--font-geist-sans)]"
      >
        <div className="min-h-screen min-w-full overflow-hidden relative">
          <div ref={bg2Ref} className="w-full h-full absolute">
            <Image src={bg} fill alt="Background" />
          </div>
          <div className="relative min-h-screen flex flex-col gap-14">
            <h1
              ref={text2ref}
              className="text-6xl relative pt-8 font-semibold text-center"
            >
              Launching the leaders of tomorrow
            </h1>
            <div className="h-full w-full flex items-center gap-4 justify-center">
              <div
                ref={classref}
                className="relative pt-14 w-[1200px] h-[700px] min-h-[500px]"
              >
                <Image src={classpic} fill alt="class" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
