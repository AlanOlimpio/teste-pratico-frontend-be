import styled, { css, keyframes } from "styled-components";
import { device } from "../styles/global";

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

export const EmployeesListResponse = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 350px);
    padding: 0px ${theme.spacing.lg};
    font-size: ${theme.fontSize.md};
      text-align: center;
    strong{
    padding: 0px ${theme.spacing.xxxs};
    }
     @media ${device.tablet} {
         padding: calc(${theme.spacing.xs} - 1.387px) ${theme.spacing.sm};
   
  `}
`;
