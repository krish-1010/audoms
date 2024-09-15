import React from "react";
import Image from "next/image";
// import { useState } from "react";
import bg from "/public/imgs/backgroundImage.png";
import au from "/public/imgs/auimg.png";

const page = () => {
  return (
    <div>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <div className="flex min-h-screen items-center">
        <div className="relative w-[75%] h-[500px] mx-auto grid grid-cols-10">
          <div className="relative col-span-4">
            <Image src={au} fill alt="au" />
          </div>
          <div className="col-span-6 px-20 py-10">
            <div className="flex flex-col h-full justify-center">
              <div>About AU</div>
              <div>
                Anna University, founded in 1978, is a top Tamil Nadu state
                university with an &apos;A++&apos; NAAC grade and a global rank
                of 427. It aims to be a world-class leader in tech education,
                research, and industry ties, producing skilled, ethical pros,
                and driving innovation and global impact.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
