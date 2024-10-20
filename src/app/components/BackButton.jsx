"use client";

import React from "react";
import styled from "styled-components";

import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <StyledWrapper>
      <div className="outer-circle" onClick={() => router.back()}>
        <IoMdArrowRoundBack size={30} color="white" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outer-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(250, 250, 250, 0.2);
    display: grid;
    place-items: center;
  }
`;

export default BackButton;
