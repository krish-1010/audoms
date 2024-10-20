"use client";

import React from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import { profdata } from "../../data/proffesors";
import Profile from "../../components/Profile";
import Link from "next/link";
import CircleButton from "../../components/CircleButton";

const page = ({ params }) => {
  const id = params.id;

  const professor = profdata.find((prof) => prof.id === id);

  if (!professor) return <div>Professor not found</div>;

  return (
    <div className="  ">
      <div className=" absolute min-h-screen w-full ">
        <Image src={bg} fill alt="background" />
      </div>
      <div
        className={`absolute top-[-25px] left-[-25px] 
          `}
      >
        <Link href="/demographics">
          <CircleButton text="Demographics" />
        </Link>
      </div>
      <div className="relative p-4 h-screen top-1/2">
        <Profile professor={professor} />
      </div>
    </div>
  );
};

export default page;
