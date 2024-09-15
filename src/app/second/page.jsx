"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import classpic from "/public/imgs/class.png";

export default function Second() {
  const bgRef = useRef(null);
  const classref = useRef(null);
  const textref = useRef(null);
  const secondpageref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Initially hide the elements
    gsap.set([bgRef.current, classref.current, textref.current], {
      autoAlpha: 0,
    });

    // Animate to fade in each element
    gsap.to(bgRef.current, {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(classref.current, {
      autoAlpha: 1,
      delay: 1, // Added delay to stagger the animations
      // duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(textref.current, {
      autoAlpha: 1,
      delay: 1, // Added delay to stagger the animations
      duration: 1,
      ease: "power2.inOut",
    });

    // Setup a timeline to fade out and navigate
    const tl = gsap.timeline({
      onComplete: () => router.push("/third"), // Navigate to the third page
    });

    // Fade out the entire page after a delay or an event
    tl.to(secondpageref.current, {
      autoAlpha: 0,
      duration: 1,
      delay: 3, // Set this delay based on your UX needs
    });
  }, [router]);

  return (
    <main
      ref={secondpageref}
      className="min-h-screen font-[family-name:var(--font-geist-sans)]"
    >
      <div ref={secondcomponent} className="min-h-screen min-w-full overflow-hidden relative">
        <div ref={bgRef} className="w-full h-full absolute">
          <Image src={bg} fill alt="Background" />
        </div>
        <div className="flex flex-col gap-14">
          <h1
            ref={textref}
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
    </main>
  );
}
