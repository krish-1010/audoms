import React from "react";
import Image from "next/image";

const Company = ({ img }) => {
  return (
    <div>
      {/* <div className="w-[200px] h-[100px]">{img}</div> */}
      <Image src={img} width={200} height={100} alt="company logo" />
    </div>
  );
};

export default Company;
