import React from "react";
import styled from "styled-components";

const Circle = ({ text }) => {
  return (
    <StyledWrapper>
      <div className="loading-bar">{text}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loading-bar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background: transparent;
    border: 2px solid #3c3c3c;
    border-radius: 50%;
    text-align: center;
    // line-height: 111px;
    font-family: sans-serif;
    font-size: 15px;
    color: #ffffff;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0 0 20px #ffffff;
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5);
  }

  .loading-bar:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-top: 5px solid #ffffff;
    border-right: 5px solid #ffffff;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(405deg);
    }
  }
`;

export default Circle;
