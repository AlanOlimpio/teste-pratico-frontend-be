import styled from "styled-components";
import { css } from "styled-components";
import { device } from "../../styles/global";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.color.white};
    padding: calc(${theme.spacing.xs} - 1.387px) ${theme.spacing.xl};
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: fixed;
    width: 100%;
    display: block;
    margin: 0 auto;
     @media ${device.tablet} {
         padding: calc(${theme.spacing.xs} - 1.387px) ${theme.spacing.sm};
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: ${theme.spacing.xxs} 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 100%;
      max-width: 71px;
      height: "auto";
    }
  `}
`;
