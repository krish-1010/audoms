import React from "react";

const StudentCard = ({ icon, text }) => {
  return (
    <div
      className="border flex flex-col 
    2xl:h-[200px] 
    xl:h-[180px] 
    lg:h-[150px]
    md:h-[140px]

    xl:w-[300px] 
    lg:w-[280px]
    md:w-[250px]

    h-[150px] 

    border-white w-full"
    >
      <div className="h-[60%] flex justify-center items-center">{icon}</div>
      <div
        className="h-[40%] 
      
          2xl:text-2xl
          xl:text-xl
          lg:text-lg
          md:text-base 
       text-center flex justify-center items-center"
      >
        {text}
      </div>
    </div>
  );
};

export default StudentCard;
