"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "/public/imgs/backgroundImage.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";
import { FaChartBar } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdWebhook } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdTour } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import StudentCard from "../components/StudentCard";
import CircleButton from "../components/CircleButton";
import HomeButton from "../components/HomeButton";

const Page = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const bgRef = useRef(null);
  const t1Ref = useRef(null);
  const t2Ref = useRef(null);
  const contentRef = useRef(null);

  const combo = [
    {
      id: 1,
      icon: <FaChartBar size={70} />,
      text: "Finance & Business Analytics",
      spec: "fba",
    },
    {
      id: 2,
      icon: <MdManageAccounts size={70} />,
      text: "Human Resource Management & Marketing",
      spec: "mhr",
    },
    {
      id: 3,
      icon: <MdWebhook size={70} />,
      text: "Operations & Human Resource",
      spec: "ohr",
    },
    {
      id: 4,
      icon: <GrMoney size={70} />,
      text: "Business Analytics and Operations", //
      spec: "bao",
    },
    {
      id: 5,
      icon: <GiReceiveMoney size={70} />,
      text: "Finance & Human Resource",
      spec: "fhr",
    },
    {
      id: 6,
      icon: <SiGooglemarketingplatform size={70} />,
      text: "Finance & Marketing",
      spec: "fm",
    },

    {
      id: 7,
      icon: <GrWorkshop size={70} />,
      text: "Operations & Marketing",
      spec: "mop",
    },
    {
      id: 8,
      icon: <MdTour size={70} />,
      text: "Tourism Management",
      spec: "tm",
    },
  ];

  const [visible, setvisible] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      setvisible(true);
    }, 500);

    // Clean up: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useGSAP(() => {
    const bgi = bgRef.current;
    const t1 = t1Ref.current;
    const t2 = t2Ref.current;
    const cont = contentRef.current;
    const tl = gsap.timeline();

    tl.to(bgi, { scale: 3.8, duration: 2, ease: "power2.inOut" })

      // Simultaneously fade and scale t1
      .from(
        t1,
        { scale: 0.5, opacity: 0, duration: 2, ease: "power2.inOut" },
        "<"
      )
      // Fade out t1 and rotate background to original after delay
      // .to(t1, { opacity: 0, duration: 1 }, ">1")
      .to(t1, { y: -320, duration: 2, ease: "power2.inOut" }, ">")

      //   .to(bgi, { rotate: 0, duration: 2, ease: "power2.inOut" })

      // Fade in t2 as background starts to flip

      // Final scale down of background and fade in content
      .to(bgi, { scale: 1, duration: 2, ease: "power2.inOut" })
      .from(cont, { opacity: 0, duration: 2, ease: "power2.inOut" }, "<");
  });

  return (
    <div className="min-h-screen flex w-full items-center justify-center">
      <div className="absolute min-h-screen w-full">
        <Image ref={bgRef} src={bg} fill alt="background" />
      </div>

      <div
        className="fixed top-[7%] z-50 xl:left-[50px] 
      md:left-[40px]
      transform translate-x-1/2"
      >
        <HomeButton />
      </div>

      <div className="absolute bottom-[-25px] left-[-25px]">
        <Link href="/professors">
          <CircleButton text="Faculty"></CircleButton>
        </Link>
      </div>

      <h1
        className={`absolute font-semibold
          2xl:text-5xl
          xl:text-4xl
          lg:text-3xl
          md:text-2xl 
          ${visible ? "block" : "hidden"}`}
        ref={t1Ref}
      >
        Professional Specialization Combinations
      </h1>
      <div className="relative flex justify-center">
        <div
          ref={contentRef}
          className={`grid md:grid-cols-3 mt-10 xl:grid-cols-4 gap-4 p-4 ${
            visible ? "block" : "hidden"
          }`}
        >
          {combo.map((item) => (
            <div key={item.id} className="w-[300px]">
              <Link href={`/students/${item.spec}`}>
                <StudentCard icon={item.icon} text={item.text} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
