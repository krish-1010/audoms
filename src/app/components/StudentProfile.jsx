"use client";
import React from "react";
import Image from "next/image";
// import bg from "/public/imgs/backgroundImage.png";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
// import Link from "next/link";

// import { profdata } from "../../data/proffesors";
// import { studentsdata } from "../../data/studentsdata";
// import { useState, useEffect, useRef } from "react";

const StudentProfile = ({ student }) => {
  //   imulate timing for when the logo should move up and text should appear

  const skills = student.skills.join(", ");
  const certifications = student.cert.join(", ");
  const internship = student.intern.join(", ");

  return (
    <div className="w-full  h-full flex gap-8 justify-center items-center ">
      <div className="flex flex-row gap-16 md:w-[720px] 2xl:w-[1200px] xl:w-[1000px] pt-4 pb-4 ">
        <div className="w-[380px] relative  h-[400px]">
          <Image
            src={student.img}
            className="rounded-md"
            alt="img"
            fill
          ></Image>
        </div>
        <div className="w-[60%] flex flex-col gap-4 justify-center items-start">
          <div className="xl:text-4xl md:text-3xl font-bold">
            <Typewriter
              options={{ loop: true, autoStart: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`${student.name}`)
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .changeDelay(500)
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
          <div className="text-xxl font-semibold">{student.qual}</div>
          <div className="text-lg font-semibold">Skills: {skills}</div>
          <div className="text-lg font-semibold">
            Certificates: {certifications}
          </div>
          <div className="text-base font-semibold">
            Internship: {internship}
          </div>
          <div className="text-base font-semibold">
            Experience: {student.exp}
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div>
              <a href={`${student.linkedin}`}>
                <FaLinkedin size={35} fill="#42b0f5" />
              </a>
            </div>
            <div>
              <a href={`mailto:${student.email}`}>
                <IoIosMail size={35} />
              </a>
            </div>
          </div>
          {/* <div className="text-xl font-semibold">{student.qualification}</div> */}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
