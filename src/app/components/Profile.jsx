"use client";
import React from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import Typewriter from "typewriter-effect";
// import { profdata } from "../../data/proffesors";
// import { studentsdata } from "../../data/studentsdata";
// import { useState, useEffect, useRef } from "react";

const Profile = ({ professor }) => {
  //   imulate timing for when the logo should move up and text should appear

  return (
    <div className="w-full h-full flex gap-8 justify-center items-center ">
      <div className="flex flex-row gap-16 2xl:w-[1200px] w-[1200px] pt-4 pb-4 ">
        <div className="w-[380px] relative  h-[400px]">
          <Image
            src={professor.img}
            className="rounded-md"
            alt="img"
            fill
          ></Image>
        </div>
        <div className="w-[60%] flex flex-col gap-4 justify-center items-start">
          <div className="text-4xl font-bold">
            <Typewriter
              options={{ loop: true, autoStart: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`${professor.name}`)
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
          <div className="text-2xl font-semibold">
            {professor.qualification}
          </div>
          <div className="text-xl font-semibold">{professor.title}</div>
          <div className="text-xl font-semibold">{professor.domain}</div>
          {/* <div className="text-xl font-semibold">{professor.qualification}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
