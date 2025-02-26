import styled, { css } from "styled-components";
import { device } from "../../styles/global";

export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    position: relative;
    width: 100%;
    max-width: 287px;
    input {
      flex: 1;
      border-radius: 8px;
      border: 1px solid ${theme.color["gray-00"]};
      background: ${theme.color.white};
      color: ${theme.color["gray-20"]};
      padding: calc(${theme.spacing.xs} - 1.5px)
        calc(${theme.spacing.xxxl} + 8px) calc(${theme.spacing.xs} - 1.5px)
        calc(${theme.spacing.xs} - 1.5px);
      width: 100%;

      &::placeholder {
        color: ${theme.color["gray-20"]};
      }
    }
    button {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      color: ${theme.color["gray-10"]};
      padding: calc(${theme.spacing.xs} - 4px);
      background: transparent;
      cursor: pointer;
      position: absolute;
      right: 0;
      transition: 0.3s;
      border-radius: 0px 8px 8px 0px;
      border: 1px solid transparent;
      height: 49.8px;
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background: ${theme.color["gray-20"]};
        border: 1px solid ${theme.color["gray-20"]};
        svg path {
          fill: ${theme.color.white};
        }
      }
    }
    @media ${device.tablet} {
      max-width: 100%;
    }
  `}
`;
