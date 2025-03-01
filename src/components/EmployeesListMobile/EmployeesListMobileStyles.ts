import styled from "styled-components";
import { css } from "styled-components";
import { device } from "../../styles/global";

export const EmployeesListContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0px ${theme.spacing.lg} ;
     @media ${device.tablet} {
         padding: 0px ${theme.spacing.sm} calc(${theme.spacing.xs} - 1.387px) ;
  `}
`;

export const WrapperListHeaderMobile = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing.xs};
    color: ${theme.color.white};
    font-size: ${theme.fontSize.sm};
    text-align: left;
    font-weight: 400;
    background-color: ${theme.color.primary};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 0px;
  `}
`;

export const WrapperInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.md};
    align-items: center;
  `}
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    span {
      width: 8px;
      height: 8px;
      background: ${theme.color.white};
      border-radius: 50%;
      display: block;
    }
  `}
`;
