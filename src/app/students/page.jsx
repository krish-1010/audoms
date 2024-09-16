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

const Page = () => {
  const bgRef = useRef(null);
  const t1Ref = useRef(null);
  const t2Ref = useRef(null);
  const contentRef = useRef(null);

  const combo = [
    {
      icon: <FaChartBar />,
      text: "Finance, Business Analysis",
    },
    {
      icon: <MdManageAccounts />,
      text: "Human Resource Management,  Marketing",
    },
    {
      icon: <MdWebhook />,
      text: "Operations, Human Resource",
    },
    {
      icon: <GrMoney />,
      text: "Finance, Operations",
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

      .to(t1, { y: -320, duration: 2, ease: "power2.inOut" }, ">")

      //   .to(bgi, { rotate: 0, duration: 2, ease: "power2.inOut" })

      // Fade in t2 as background starts to flip

      // Final scale down of background and fade in content
      .to(bgi, { scale: 1, duration: 2, ease: "power2.inOut" });
  });

  return (
    <div className="h-full flex w-full items-center justify-center">
      <div className="absolute min-h-screen w-full">
        <Image ref={bgRef} src={bg} fill alt="background" />
      </div>
      <h1 className="absolute text-5xl font-semibold" ref={t1Ref}>
        Professional Specialization Combinations
      </h1>
      <div className="relative flex justify-center">
        <div className="grid grid-cols-4 gap-4 p-4"></div>
      </div>
    </div>
  );
};

export default Page;
