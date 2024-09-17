"use client";

import React from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb';
// import { profdata } from "../../../data/proffesors";
import { bao, fm, mhr, fba, fhr, mop, ohr } from "../../../data/studentsdata";


const page = ({ params }) => {

  const specializationMapping = {
    bao, // Business Analytics and Operations
    ohr, // Operations and Human Resource
    fm, // Finance and Marketing
    mhr, // Marketing and HR (assuming this is the correct abbreviation)
    fba, // Finance and Business Analytics
    fhr, // Finance and Human Resource
    mop, // Operations and Human Resource (assuming this is the correct abbreviation)
  };

  const sid = parseInt(params.id);

  const specialization = params.spec;



  const students = specializationMapping[specialization];

  const student = students.find((student) => student.id === sid);

  

  

  if (!student) return <div>student not found</div>;

  return (
    <div>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <div className="relative">
        <div>{student.name}</div>
      </div>
    </div>
  );
};

export default page;
