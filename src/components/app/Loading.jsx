import React from "react";
import styled, { keyframes } from "styled-components/macro";

export default function Loading() {
  return (
    <Container>
      <Circle>
        <Square />
      </Circle>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleAnimation = keyframes`
  100% {
    transform: scale(1.3);
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border: 10px solid #1abc9c;
  border-radius: 50%;
  animation: ${CircleAnimation} 1s ease-in-out infinite alternate;
`;

const SquareAnimation = keyframes`
  100% {
    border-width: 30px;
    transform: rotate(180deg);
  }
`;

const Square = styled.div`
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  border: 10px solid #e67e22;
  animation: ${SquareAnimation} 1s ease-in-out infinite alternate;
`;
