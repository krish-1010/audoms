import React from "react";

const StudentCard = ({ icon, text }) => {
  return (
    <div className="border flex flex-col border-white w-full h-full">
      <div className="h-[60%]">{icon}</div>
      <div className="h-[40%]">{text}</div>
    </div>
  );
};

export default StudentCard;
