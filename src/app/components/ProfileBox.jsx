import React from "react";
import Image from "next/image";

const ProfileBox = ({ img, name, desc, qual }) => {
  return (
    <div className="w-[300px] ">
      <div className="rounded-md py-4 w-full flex gap-1 border border-white text-white">
        <div className="w-[40%] flex justify-center items-center">
          <div className="absolute rounded-full h-[70px] w-[70px]">
            <Image src={img} alt="profile" fill className="rounded-full" />
          </div>
        </div>
        <div className="w-[60%] flex-row">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="text-sm">{desc}</p>
          <p className="text-sm">{qual}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
