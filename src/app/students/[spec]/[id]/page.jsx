"use client";

import React from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
// import { profdata } from "../../../data/proffesors";

const page = ({ params }) => {
  const id = parseInt(params.id);

  console.log(id);

  const tm = [
    {
      id: 1,
      name: "John Doe",
      img: "/public/imgs/johndoe.png",
      qual: "B.E. Mechanical",
      skills: "Python, Java, C++",
      cert: "Data Science",
      intern: "Google",
      exp: "2 years",
      linkedin: "https://www.linkedin.com",
      email: "example@mail.com",
    },
    {
      id: 2,
      name: "John Doe",
      img: "/public/imgs/johndoe.png",
      qual: "B.E. Mechanical",
      skills: "Python, Java, C++",
      cert: "Data Science",
      intern: "Google",
      exp: "2 years",
      linkedin: "https://www.linkedin.com",
      email: "example@mail.com",
    },
  ];

  const student = tm.find((stud) => stud.id === id);
  console.log(id);
  console.log("heloon");

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
