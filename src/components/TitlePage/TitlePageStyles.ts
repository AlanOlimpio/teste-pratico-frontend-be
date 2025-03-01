import styled from "styled-components";
import { css } from "styled-components";
import { device } from "../../styles/global";

export const TitlePageContainer = styled.div`
  ${({ theme }) => css`
    padding: calc(${theme.spacing.sm} + ${theme.spacing.xxxl})
      ${theme.spacing.xl} 0px;
    width: 100%;
    @media ${device.tablet} {
      padding: calc(${theme.spacing.sm} + ${theme.spacing.xxxl})
        ${theme.spacing.sm} 0px;
    }
  `}
`;

export const TitlePageContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: ${theme.spacing.xl} 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing.sm};
    h1 {
      font-size: ${theme.fontSize.md};
    }
    @media ${device.tablet} {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: ${theme.spacing.md} 0px ${theme.spacing.sm};
    }
  `}
`;
