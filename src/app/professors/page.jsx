"use client";

import React from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import ProfileBox from "../components/ProfileBox";
import hodIcon from "/public/imgs/hodIcon.png";
import { profdata } from "../data/proffesors";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

const Page = () => {
  useGSAP(() => {});

  return (
    <div>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <div className="relative flex justify-center ">
        <div className="grid grid-cols-1 max-w-[2600px] mt-[14rem] sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profdata.map((prof) => (
            <div className="max-w-[300px]" key={prof.id}>
              <Link href={`/professors/${prof.id}`}>
                <ProfileBox
                  img={prof.img}
                  name={prof.name}
                  desc={prof.title}
                  qual={prof.qualification}
                  //   domain={prof.domain}
                />
                ;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
