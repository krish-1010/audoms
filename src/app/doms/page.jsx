import React from "react";
import Image from "next/image";
// import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import doms from "/public/imgs/doms.png";

const page = () => {
  return (
    <div>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <div className="flex min-h-screen items-center">
        <div className="relative w-[75%] h-[500px] mx-auto flex-col-reverse grid grid-cols-10">
          <div className="col-span-6 px-20 py-10">
            <div className="flex flex-col h-full justify-center gap-4">
              <h1 className="text-4xl font-bold">About DOMS</h1>
              <p className="text-xl">
                DOMS at Anna University, founded in 1981, is renowned for
                shaping future-ready management professionals. With a focus on
                ethical leadership and industry collaboration, it’s a go-to for
                aspiring managers. The department aims to produce socially
                responsible, specialized graduates with a strong moral compass
                and cutting-edge skills.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="relative col-span-4">
            <Image src={doms} fill alt="au" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
