"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CircleButton from "@/app/components/CircleButton";
import Test from "../../components/Test";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// import Aparjitha from "/public/imgs/Aparajitha.jpg";

import { bao, fm, mhr, fba, fhr, mop, ohr, tm } from "../../data/studentsdata";
import HoneycombBackground from "@/app/components/HoneycombBackground";
import BackButton from "@/app/components/BackButton";
import HomeButton from "@/app/components/HomeButton";

const Page = ({ params }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    // Assuming your previous animations are managed here
    // Simulate timing for when the logo should move up and text should appear

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const spec = params.spec;

  console.log(spec);

  const specializationMapping = {
    bao, // Business Analytics and Operations
    ohr, // Operations and Human Resource
    fm, // Finance and Marketing
    mhr, // Marketing and HR (assuming this is the correct abbreviation)
    fba, // Finance and Business Analytics
    fhr, // Finance and Human Resource
    mop, // Operations and Human Resource (assuming this is the correct abbreviation)
    tm, // Tourism Management
  };

  const fullSpecNames = {
    bao: "Business Analytics and Operations",
    ohr: "Operations & Human Resource",
    fm: "Finance & Marketing",
    mhr: "Marketing & Human Resource",
    fba: "Finance & Business Analytics",
    fhr: "Finance & Human Resource",
    mop: "Marketing & Operations",
    tm: "Tourism Management",
  };

  const fullHeading = fullSpecNames[spec];

  const renderGrid = () => {
    if (students.length === 1) {
      // return <Mop spec={spec} students={students} />;
      return (
        <Test
          size={"max-w-[550px]"}
          imgsize={120}
          spec={spec}
          students={students}
        />
      );
    } else if (students.length == 7) {
      console.log("7 students");
      return (
        <Test
          size={"max-w-[760px]"}
          imgsize={90}
          spec={spec}
          students={students}
        />
      );
    } else if (students.length == 19) {
      //fba
      return (
        <Test
          size={"max-w-[1200px]"}
          imgsize={80}
          spec={spec}
          students={students}
        />
      );
    } else if (students.length == 12) {
      // mhr
      return (
        <Test
          size={"max-w-[1200px]"}
          imgsize={80}
          spec={spec}
          students={students}
        />
      );
    } else if (students.length == 8) {
      // fm
      return (
        <Test
          size={"max-w-[720px]"}
          imgsize={80}
          spec={spec}
          students={students}
        />
      );
    } else if (students.length == 3) {
      // bao
      return (
        <Test
          size={"max-w-[720px]"}
          imgsize={100}
          spec={spec}
          students={students}
        />
      );
    } else if (students.length == 22) {
      // tm
      return (
        <Test
          size={"max-w-[1200px]"}
          imgsize={70}
          spec={spec}
          students={students}
        />
      );
    } else <div className="text-4xl font-bold">Coming Soon</div>;

    // Add more conditions as necessary for other specializations
  };

  useEffect(() => {
    document.body.classList.add(
      "bg-background-pattern",
      "bg-repeat",
      "bg-center",
      "bg-cover",
      "z-[-1]"
    );
    // Assuming your previous animations are managed here
    // Simulate timing for when the logo should move up and text should appear
    setTimeout(() => {
      setTextVisible(true); // Show the text
    }, 100);
    return () => {
      document.body.classList.remove(
        "bg-background-pattern",
        "bg-repeat",
        "bg-center",
        "bg-cover",
        "z-[-1]"
      );
    };
  }, []);

  // Using useGSAP to create the animations
  useGSAP(() => {
    // Initial opacity set for the involved elements
    gsap.set([headingRef.current, gridRef.current], { opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline();

    // Check if spec is loaded to start animations
    if (spec) {
      tl.to(headingRef.current, {
        duration: 2,
        opacity: 1,
        // y: "-360", // Moves the header up by half its height
        ease: "power2.out",
      })
        .to(
          headingRef.current,
          {
            duration: 1,
            // opacity: 1,
            delay: 0.5,
            y: "-360", // Moves the header up by half its height
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          gridRef.current,
          {
            duration: 0.5,
            opacity: 1,
            ease: "power2.inOut",
          },
          "+=0.5"
        ); // Starts half a second before the previous animation ends for a smooth transition
    }
  }, [spec, fullHeading]);

  const students = specializationMapping[spec];

  if (!students) {
    console.log("Invalid specialization");
    // Handle error or invalid specialization
    return <div>Invalid specialization</div>;
  } else {
    // const students = specializationMapping[spec];

    console.log(students[0].img);

    console.log(students.length);

    return (
      <div className={` font-bold tracking-tight`}>
        <div className="absolute z-50 top-[10%] left-[70px] cursor-pointer">
          <BackButton />
        </div>

        <div className="absolute bottom-[-25px] left-[-25px]">
          <Link href="/professors">
            <CircleButton text="Faculty"></CircleButton>
          </Link>
        </div>
        <HoneycombBackground />
        <div className="absolute w-full h-full bg-background-pattern bg-repeat bg-center bg-cover z-[-1]">
          {/* No content inside this div, it's just for the background */}
        </div>

        {spec ? (
          <>
            {/* <div className="absolute top-[10%] left-[30%] transform -translate-x-[30%] ">
              <HomeButton />
            </div> */}
            <h1
              className={`${
                textVisible ? "flex" : "hidden"
              }  text-4xl gap-4 items-center font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              ref={headingRef}
            >
              <HomeButton />
              {fullHeading}
            </h1>
          </>
        ) : (
          <h1>Loading...</h1>
        )}

        <div
          ref={gridRef}
          className={`${textVisible ? "block" : "hidden"} w-full h-screen `}
        >
          {renderGrid()}
        </div>
      </div>
    );
  }
};

export default Page;
