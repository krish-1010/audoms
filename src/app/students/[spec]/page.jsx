"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import bg from "/public/imgs/backgroundImage.png";
import Circle from "../../components/Circle";
import StudentCircle from "../../components/StudentCircle";
import Link from "next/link";
import exp from "constants";
import Mop from "../../components/Mop";
import Fhr from "../../components/Fhr";
import Fba from "../../components/Fba";
import Mhr from "../../components/Mhr";
import Fm from "../../components/Fm";

// import Aparjitha from "/public/imgs/Aparajitha.jpg";

import { bao, fm, mhr, fba, fhr, mop } from "../../data/studentsdata";

const Page = ({ params }) => {
  const spec = params.spec;

  console.log(spec);

  const specializationMapping = {
    bao, // Business Analytics and Operations
    fm, // Finance and Marketing
    mhr, // Marketing and HR (assuming this is the correct abbreviation)
    fba, // Finance and Business Analytics
    fhr, // Finance and Human Resource
    mop, // Operations and Human Resource (assuming this is the correct abbreviation)
  };

  // const tm = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     img: "/public/imgs/johndoe.png",
  //     qual: "B.E. Mechanical",
  //     skills: "Python, Java, C++",
  //     cert: "Data Science",
  //     intern: "Google",
  //     exp: "2 years",
  //     linkedin: "https://www.linkedin.com",
  //     email: "example@mail.com",
  //   },
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     img: "/public/imgs/johndoe.png",
  //     qual: "B.E. Mechanical",
  //     skills: "Python, Java, C++",
  //     cert: "Data Science",
  //     intern: "Google",
  //     exp: "2 years",
  //     linkedin: "https://www.linkedin.com",
  //     email: "example@mail.com",
  //   },
  // ];

  const renderGrid = () => {
    if (students.length === 1) {
      return <Mop spec={spec} students={students} />;
    } else if (students.length == 7) {
      console.log("7 students");
      return <Fhr spec={spec} students={students} />;
    } else if (students.length == 19) {
      return <Fba spec={spec} students={students} />;
    } else if (students.length == 12) {
      return <Mhr spec={spec} students={students} />;
    } else if (students.length == 8) {
      return <Fm spec={spec} students={students} />;
    }

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

  const students = specializationMapping[spec];

  if (!students) {
    console.log("Invalid specialization");
    // Handle error or invalid specialization
    return <div>Invalid specialization</div>;
  } else {
    // const students = specializationMapping[spec];

    console.log(students[0].img);

    const numCols = Math.ceil(Math.sqrt(students.length + 1)); // +1 for the title
    const midCol = Math.floor(numCols / 2);

    console.log(students.length);

    return (
      <div className={` font-bold tracking-tight`}>
        {/* <div className="absolute min-h-screen  w-full">
          <Image src={bg} className="" fill alt="background" />
        </div> */}
        <div className="absolute w-full h-full bg-background-pattern bg-repeat bg-center bg-cover z-[-1]">
          {/* No content inside this div, it's just for the background */}
        </div>
        <div className="relative w-full h-screen">{renderGrid()}</div>
      </div>
    );
  }
};

{
  /* <div
className={`relative grid grid-cols-${numCols} ml-auto mr-auto min-h-screen w-[1200px] gap-4 p-4`}
>
 <div className="relative grid grid-cols-5 ml-auto mr-auto min-h-screen w-[1200px] "> 
{students.map((student, index) => {
  // Calculate row and col placement
  const row = Math.floor(index / numCols);
  const col = index % numCols;
  const isCenter = row === midCol && col === midCol;

  if (isCenter) {
    return (
      <div key="title" className="text-center">
        Our Special Students
      </div>
    );
  }

  return (
    <StudentCircle
      key={student.id}
      student={student}
      className={`col-start-${col + 1} row-start-${row + 1}`}
    />
  );
})}
</div> */
}

// {/* <!-- Column 1 --> */}
// <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
// {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
// <Link href="/1">
//   <Circle text="Praveen" />
// </Link>
// <Link href="/demographics">
//   <Circle text="Demographics" />
// </Link>
// </div>
// <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
// {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
// <Link href="/1">
//   <Circle text="Praveen" />
// </Link>
// <Link href="/demographics">
//   <Circle text="Demographics" />
// </Link>
// </div>

// {/* <!-- Column 2 --> */}
// <div class="flex flex-col gap-40 w-full h-full  items-center justify-center">
// {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
// <Link href="/doms">
//   <StudentCircle />
// </Link>
// <div className="text-5xl font-bold">About DOMS AU</div>
// <Link href="/professors">
//   <Circle text="Faculty" />
// </Link>
// </div>

// {/* <!-- Column 3 --> */}
// <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
// {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
// <Link href="/scroll">
//   <Circle text="Learning Journey" />
// </Link>
// <Link href="/students">
//   <Circle text="Student" />
// </Link>
// </div>
// <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
// {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
// <Link href="/scroll">
//   <Circle text="Learning Journey" />
// </Link>
// <Link href="/students">
//   <Circle text="Student" />
// </Link>
// </div>

export default Page;
