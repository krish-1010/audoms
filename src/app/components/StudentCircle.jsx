import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StudentCircle = ({ img }) => {
  if (img === "none") {
    return (
      <StyledWrapper>
        <div className="loading-bar2"></div>
      </StyledWrapper>
    );
  } else {
    return (
      <StyledWrapper>
        <div className="loading-bar">
          <Image
            src={img}
            alt="Student"
            width={600}
            height={800}
            className="absolute simg top-0 left-0"
          ></Image>
        </div>
      </StyledWrapper>
    );
  }
};

const StyledWrapper = styled.div`
  // .img-wrapper {
  //   border-radius: 50%;
  // }

  .loading-bar {
    // position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background: transparent;
    // border: 2px solid #3c3c3c;
    // border-radius: 100%;
    text-align: center;
    // line-height: 111px;
    // font-family: sans-serif;
    font-size: 27px;
    color: #ffffff;
    // letter-spacing: 3px;
    // text-transform: uppercase;
    // text-shadow: 0 0 20px #ffffff;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 1);
  }
  .loading-bar2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background: transparent;

    text-align: center;

    font-size: 27px;
  }

  .simg:hover {
    transition: all 1s ease;
    transform: scale(1.2);
  }
`;

export default StudentCircle;

// import React from "react";
// import styled from "styled-components";
// import Image from "next/image";

// const StudentCircle = ({ img }) => {
//   if (img === "none") {
//     return (
//       <StyledWrapper>
//         <div className="loading-bar2"></div>
//       </StyledWrapper>
//     );
//   } else {
//     return (
//       <StyledWrapper>
//         <div className="loading-bar">
//           <Image
//             src={img}
//             alt="Student"
//             fill
//             className="rounded-full img"
//           ></Image>
//         </div>
//       </StyledWrapper>
//     );
//   }
// };

// const StyledWrapper = styled.div`
//   // .img-wrapper {
//   //   border-radius: 50%;
//   // }

//   .loading-bar {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100px;
//     height: 100px;
//     background: transparent;
//     border: 2px solid #3c3c3c;
//     border-radius: 100%;
//     text-align: center;
//     // line-height: 111px;
//     // font-family: sans-serif;
//     font-size: 27px;
//     color: #ffffff;
//     // letter-spacing: 3px;
//     // text-transform: uppercase;
//     text-shadow: 0 0 20px #ffffff;
//     box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 1);
//   }
//   .loading-bar2 {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 200px;
//     height: 200px;
//     background: transparent;

//     text-align: center;

//     font-size: 27px;
//   }

//   .loading-bar:hover {
//     transition: all 0.3s ease;
//     transform: scale(1.1);
//   }
// `;

// export default StudentCircle;
