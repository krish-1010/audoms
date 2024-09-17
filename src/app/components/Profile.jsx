"use client";
import React from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
// import { profdata } from "../../data/proffesors";
// import { studentsdata } from "../../data/studentsdata";
// import { useState, useEffect, useRef } from "react";

const Profile = ({ professor }) => {
  //   imulate timing for when the logo should move up and text should appear

  return (
    <div className="w-full h-full flex gap-8 justify-center items-center border border-white">
      <div className="flex flex-row gap-16 w-[720px] pt-4 pb-4">
        <div className="w-[380px] relative h-[400px]">
          <Image src={professor.img} alt="img" fill></Image>
        </div>
        <div className="w-[60%] flex flex-col gap-4 justify-center items-start">
          <div className="text-4xl font-bold">{professor.name}</div>
          <div className="text-2xl font-bold">{professor.domain}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
