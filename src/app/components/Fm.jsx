import React from "react";
import Link from "next/link";
import StudentCircle from "./StudentCircle";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";


const Fm = ({ spec, students }) => {
  return (
    <div className="relative grid grid-cols-5 ml-auto mr-auto min-h-screen w-[1200px] ">
      {/* <div className="relative grid grid-cols-3 ml-auto mr-auto min-h-screen w-[1200px] "> */}
      {/* <!-- Column 1 --> */}
      <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[0].id}`}>
          <StudentCircle img={students[0].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[0].id}`}>
          <StudentCircle img={students[1].img} />
        </Link>
      </div>

      {/* <!-- Column 2 --> */}
      <div class="flex flex-col gap-20 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[2].id}`}>
          <StudentCircle img={students[2].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[3].id}`}>
          <StudentCircle img={students[3].img} />
        </Link>
        <div className="text-5xl font-bold">About DOMS AU</div>
        <Link href={`/student/${spec}/students${students[4].id}`}>
          <StudentCircle img={students[4].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[5].id}`}>
          <StudentCircle img={students[5].img} />
        </Link>
      </div>

      {/* <!-- Column 3 --> */}
      <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[6].id}`}>
          <StudentCircle img={students[6].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[7].id}`}>
          <StudentCircle img={students[7].img} />
        </Link>
      </div>
    </div>
  );
};

export default Fm;
