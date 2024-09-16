import React from "react";
import Image from "next/image";

const Company = ({ img }) => {
  return (
    <div>
      <div className="w-[200px] h-[100px]">{img}</div>
    </div>
  );
};

export default Company;
