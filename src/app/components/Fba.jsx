import React from "react";

import Link from "next/link";
import StudentCircle from "./StudentCircle";

const Fba = ({ spec, students }) => {
  return (
    <div className="relative grid grid-cols-5 ml-auto mr-auto min-h-screen w-[1200px] ">
      {/* <!-- Column 1 --> */}
      <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[0].id}`}>
          <StudentCircle img={students[0].img} />
        </Link>

        <Link href={`/student/${spec}/students${students[1].id}`}>
          <StudentCircle img={students[1].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[2].id}`}>
          <StudentCircle img={students[2].img} />
        </Link>
      </div>

      {/* <!-- Column 2 --> */}
      <div class="flex flex-col gap-24 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[3].id}`}>
          <StudentCircle img={students[3].img} />
        </Link>

        <Link href={`/student/${spec}/students${students[4].id}`}>
          <StudentCircle img={students[4].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[5].id}`}>
          <StudentCircle img={students[5].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[6].id}`}>
          <StudentCircle img={students[6].img} />
        </Link>
      </div>

      {/* <!-- Column  --> middle*/}
      <div class="flex flex-col gap-20 w-full h-full  items-center justify-center">
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[7].id}`}>
          <StudentCircle img={students[7].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[8].id}`}>
          <StudentCircle img={students[8].img} />
        </Link>
        <div className="text-5xl font-bold">FBA</div>
        <Link href={`/student/${spec}/students${students[9].id}`}>
          <StudentCircle img={students[9].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[10].id}`}>
          <StudentCircle img={students[10].img} />
        </Link>
      </div>

      {/* <!-- Column 4 --> */}

      <div class="flex flex-col gap-24 w-full  h-full  items-center justify-center">
        <Link href={`/student/${spec}/students${students[11].id}`}>
          <StudentCircle img={students[11].img} />
        </Link>
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[12].id}`}>
          <StudentCircle img={students[12].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[13].id}`}>
          <StudentCircle img={students[13].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[14].id}`}>
          <StudentCircle img={students[14].img} />
        </Link>
      </div>

      {/* <!-- Column 5 --> */}

      <div class="flex flex-col gap-24 w-full h-full mt-32 items-center justify-center">
        <Link href={`/student/${spec}/students${students[15].id}`}>
          <StudentCircle img={students[15].img} />
        </Link>
        {/* <div class="bg-blue-500 text-white p-4">Item 1A</div> */}
        <Link href={`/student/${spec}/students${students[16].id}`}>
          <StudentCircle img={students[16].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[17].id}`}>
          <StudentCircle img={students[17].img} />
        </Link>
        <Link href={`/student/${spec}/students${students[18].id}`}>
          <StudentCircle img={students[18].img} />
        </Link>
      </div>
    </div>
  );
};

export default Fba;
