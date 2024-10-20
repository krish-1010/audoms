"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import ProfileBox from "../components/ProfileBox";
import hodIcon from "/public/imgs/hodIcon.png";
import { profdata } from "../data/proffesors";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import CircleButton from "../components/CircleButton";
import HomeButton from "../components/HomeButton";

const Page = () => {
  const bgRef = useRef(null);
  const t1Ref = useRef(null);
  const t2Ref = useRef(null);
  const contentRef = useRef(null);

  const [visible, setvisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      setvisible(true);
    }, 500);

    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.add(
        "bg-background-pattern",
        "bg-repeat",
        "bg-center",
        "bg-cover",
        "bg-background-pattern",
        "z-[-1]"
      );
      setIsVisible(true);
    }, 10000);

    // Clean up: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove(
        "bg-background-pattern",
        "bg-repeat",
        "bg-center",
        "bg-cover",
        "bg-background-pattern",
        "z-[-1]"
      );
    };
  }, []);

  useGSAP(() => {
    const bgi = bgRef.current;
    const t1 = t1Ref.current;
    const t2 = t2Ref.current;
    const cont = contentRef.current;
    const tl = gsap.timeline({
      onComplete: () => {
        // Remove overflow-hidden when the animations are complete
        document.body.classList.remove("overflow-hidden");
      },
    });
    gsap.set(t1, { top: "50%", left: "50%" });

    tl.to(bgi, { scale: 3.8, rotate: 45, duration: 2, ease: "power2.inOut" })

      // Simultaneously fade and scale t1
      .from(
        t1,
        { scale: 0.5, opacity: 0, duration: 2, ease: "power2.inOut" },
        "<"
      )
      // Fade out t1 and rotate background to original after delay
      .to(t1, { opacity: 0, duration: 1 }, ">1")
      .set(t1, { css: { zIndex: -10 } })
      .to(bgi, { rotate: 0, duration: 2, ease: "power2.inOut" })

      // Fade in t2 as background starts to flip
      .from(
        t2,
        { scale: 0.5, opacity: 0, duration: 2, ease: "power2.inOut" },
        "<"
      )
      // Fade out t2
      .fromTo(
        t2,
        { top: "50%", left: "50%" },
        { opacity: 1, duration: 1, top: 70 },
        ">1"
      )

      // Final scale down of background and fade in content
      .to(bgi, { scale: 1, duration: 2, ease: "power2.inOut" })
      .from(cont, { opacity: 0, duration: 2, ease: "power2.inOut" }, "<")
      .to(bgi, { scale: 1.2, duration: 1, ease: "power2.out" });
  });

  return (
    <div className="">
      <div
        ref={bgRef}
        className="absolute w-full h-full bg-background-pattern bg-repeat bg-center bg-cover z-[-1]"
      >
        {/* Background  */}
      </div>

      <div
        className={`absolute top-[-25px] left-[-25px] ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <Link href="/demographics">
          <CircleButton text="Demographics" />
        </Link>
      </div>

      <h1
        className={` absolute -translate-x-1/2 text-center text-5xl font-bold ${
          visible ? "block" : "hidden"
        }`}
        ref={t1Ref}
      >
        Meet the Minds Shaping Tomorrow <br /> Visionaries of the Helm
      </h1>
      <h1
        className={`text-center min-w-[700px] md:text-4xl -translate-x-1/2 absolute xl:text-5xl font-bold ${
          visible ? "flex" : "hidden"
        } items-center gap-4`}
        ref={t2Ref}
      >
        <HomeButton />
        The Exemplary Educators : <br />
        Our Distinguished Faculty
      </h1>
      <div className=" flex justify-center ">
        <div
          ref={contentRef}
          className={`grid grid-cols-1 max-w-[2600px] mt-[14rem] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 ${
            visible ? "block" : "hidden"
          }`}
        >
          {profdata.map((prof) => (
            <div className="max-w-[450px]" key={prof.id}>
              <Link href={`/professors/${prof.id}`}>
                <ProfileBox
                  img={prof.img}
                  name={prof.name}
                  desc={prof.title}
                  qual={prof.qualification}
                  //   domain={prof.domain}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
