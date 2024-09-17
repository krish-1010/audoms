import React from "react";
import Link from "next/link";
import StudentCircle from "./StudentCircle";

const Mop = ({ spec, students }) => {
  return (
    <div className="relative grid grid-cols-3 ml-auto mr-auto min-h-screen w-[1200px] ">
      {/* <!-- Column 1 --> */}
      <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[0].id}`}>
          <StudentCircle img={students[0].img} />
        </Link>

        <StudentCircle img={"none"} />
      </div>

      {/* <!-- Column 2 --> */}
      <div class="flex flex-col gap-40 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[0].id}`}>
          <StudentCircle img={"none"} />
        </Link>
        <div className="text-5xl font-bold">About DOMS AU</div>
        <Link href={`/student/${spec}/students${students[0].id}`}>
          <StudentCircle img={"none"} />
        </Link>
      </div>

      {/* <!-- Column 3 --> */}
      <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <StudentCircle img={"none"} />
        <StudentCircle img={"none"} />
      </div>
    </div>
  );
};

export default Mop;
