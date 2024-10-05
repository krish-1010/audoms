"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
// import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";
import StudentProfile from "@/app/components/StudentProfile";
// import { profdata } from "../../../data/proffesors";
import {
  bao,
  fm,
  mhr,
  fba,
  fhr,
  mop,
  ohr,
  tm,
} from "../../../data/studentsdata";
import HoneycombBackground from "@/app/components/HoneycombBackground";
import CheckeredBackground from "@/app/components/CheckeredBackground";

const Page = ({ params }) => {
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

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const sid = parseInt(params.id);

  const specialization = params.spec;

  const students = specializationMapping[specialization];

  console.log(sid, specialization);

  const student = students.find((student) => student.id === sid);

  if (!student) return <div>student not found</div>;

  return (
    <div>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <CheckeredBackground />
      <div className="relative z-50 h-screen top-1/2">
        <StudentProfile student={student} />
      </div>
    </div>
  );
};

export default Page;
