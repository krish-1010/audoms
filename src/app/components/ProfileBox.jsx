import React from "react";
import Image from "next/image";

const ProfileBox = ({ img, name, desc, qual }) => {
  return (
    <div className="w-[350px] p-2">
      <div className="rounded-md py-4 h-[120px] w-[350px] flex border border-white text-white">
        <div className="w-[40%] flex justify-center items-center">
          <div className="absolute overflow-hidden object-cover rounded-full h-[80px] w-[80px]">
            <Image
              src={img}
              alt="profile"
              width={100}
              height={100}
              className="rounded-full"
              style={{ objectFit: "cover" }}
            />
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
