import React from "react";
import Link from "next/link";
import StudentCircle from "./StudentCircle";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";
import range from "lodash/range";
{
  /* <Link href={`/student/${spec}/students${students[0].id}`}>
          <StudentCircle img={students[0].img} />
        </Link> */
}

const Test = ({ spec, students, size, imgsize }) => {
  const items = range(students.length);
  const sideLength = imgsize || 70;

  console.log(students[0].img);

  return (
    <div
      className={`${size} min-w-[100px] border border-transparent mr-auto ml-auto`}
    >
      <ResponsiveHoneycomb
        className="mr-auto  mt-[14rem] min-w-[10px] ml-auto "
        defaultWidth={100}
        size={sideLength}
        items={items}
        gap={15}
        renderItem={(
          index // Changed `item` to `index` to clarify it's the index from `range`
        ) => (
          <div className="w-[200px] mx-auto">
            <Hexagon>
              <Link href={`/students/${spec}/${students[index].id}`}>
                <StudentCircle img={students[index].img} />
              </Link>
            </Hexagon>
          </div>
        )}
      >
        {/* <div className="relative grid grid-cols-3 ml-auto mr-auto min-h-screen w-[1200px] "> */}
        {/* <!-- Column 1 --> */}
      </ResponsiveHoneycomb>
    </div>
  );
};

export default Test;
