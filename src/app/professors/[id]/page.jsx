import React from "react";
import Image from "next/image";
import bg from "/public/imgs/backgroundImage.png";
import { profdata } from "../../data/proffesors";

const page = ({ params }) => {
  const id = params.id;

  const professor = profdata.find((prof) => prof.id === id);

  if (!professor) return <div>Professor not found</div>;

  return (
    <div>
      <div className="absolute min-h-screen w-full">
        <Image src={bg} fill alt="background" />
      </div>
      <div className="relative">
        <div>{professor.name}</div>
      </div>
    </div>
  );
};

export default page;
