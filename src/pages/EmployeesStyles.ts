import styled, { keyframes } from "styled-components";

const rotate = keyframes`
100%{
    transform: rotate(360deg);
   }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 280px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfiniteRotate = styled.div`
  animation: ${rotate} 0.75s linear infinite;
`;
