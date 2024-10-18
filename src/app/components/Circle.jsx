import React from "react";
import styled from "styled-components";

const Circle = ({ text }) => {
  return (
    <StyledWrapper>
      <div className="spinner">
        <div className="loading-bar">{text}</div>
      </div>
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
    // font-family: sans-serif;
    font-size: 27px;
    color: #ffffff;
    // letter-spacing: 3px;
    // text-transform: uppercase;
    text-shadow: 0 0 20px #ffffff;
    box-shadow: 0px 0px 25px 25px rgba(255, 255, 255, 0.9);
  }

  // .loading-bar:after {
  //   content: "";
  //   position: absolute;
  //   top: -40px;
  //   left: -40px;
  //   width: 140%;
  //   height: 140%;
  //   border: 15px solid transparent;
  //   border-top: 15px solid #0055aa;
  //   border-right: 15px solid #0055aa;
  //   border-radius: 50%;
  //   animation: animateC 2s linear infinite;
  // }

  .spinner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 290px;
    overflow: hidden; // Ensures no overflow if pseudo-element is larger than parent
  }

  .spinner::before {
    content: "";
    position: absolute;
    z-index: 1; // Ensure the spinner is above the pseudo-element
    width: 100%; // Match the dimensions of the spinner
    height: 100%;
    background: url("/imgs/loader.png") no-repeat center center;
    background-size: cover;
    animation: spin 2s linear infinite; // Apply the spinning animation
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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
