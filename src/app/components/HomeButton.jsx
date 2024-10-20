import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Homebuttonpng from "../../../public/imgs/homeButton.png";
import Link from "next/link";

const HomeButton = ({ text }) => {
  return (
    <StyledWrapper>
      <Link href={"/home"}>
        <div className="outer-circle">
          <Image src={Homebuttonpng} alt="home logo" width={200} height={200} />
        </div>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outer-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export default HomeButton;
