import React from "react";
import Image from "next/image";
// import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import hod from "/public/imgs/hod.png";

const page = () => {
  return (
    <div>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <div className="flex min-h-screen items-center">
        <div className="relative w-[75%] h-[500px] mx-auto grid grid-cols-10">
          <div className="relative col-span-4">
            <Image src={hod} fill alt="hod" />
          </div>
          <div className="col-span-6 px-20 py-10">
            <div className="flex flex-col h-full justify-center">
              <div>
                Inspiring Excellence: Insights from the Head of Department
              </div>
              <div>Dr. R. Magesh</div>
              <div>
                Dr. R. Mangesh, HOD of DoMS at Anna University, highlights the
                department&apos;s adaptive approach to evolving business trends.
                The MBA program, aimed at producing industry-ready
                professionals, emphasizes placements as a key milestone. DoMS
                continues to foster excellence, ensuring graduates exceed
                expectations in their careers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
