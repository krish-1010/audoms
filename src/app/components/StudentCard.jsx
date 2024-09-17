import React from "react";

const StudentCard = ({ icon, text }) => {
  return (
    <div className="border flex flex-col h-[200px] border-white w-full">
      <div className="h-[60%] flex justify-center items-center">{icon}</div>
      <div className="h-[40%] text-2xl text-center flex justify-center items-center">
        {text}
      </div>
    </div>
  );
};

export default StudentCard;
