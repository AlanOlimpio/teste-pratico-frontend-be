import styled from "styled-components";
import { css } from "styled-components";

interface ContentProps {
  $maxheight?: number;
}

type AccordionDirectionType = "top" | "right" | "bottom" | "left";

interface AccordionChevronProps {
  $direction: AccordionDirectionType;
}

export const AccordionChevron = styled.span<AccordionChevronProps>`
  ${({ $direction }) => css`
    transition: all 0.25s ease-in-out;

    ${$direction === "top" &&
    css`
      transform: rotate(-180deg);
    `}
    ${$direction === "right" &&
    css`
      transform: rotate(90deg);
    `}
    ${$direction === "bottom" &&
    css`
      transform: rotate(0deg);
    `}
    ${$direction === "left" &&
    css`
      transform: rotate(-90deg);
    `}
  `}
`;

export const AccordionWrapper = styled.div`
  ${({ theme }) => css`
    display: block;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 1px;
    button {
      width: 100%;
      padding: calc(${theme.spacing.xxs} + ${theme.spacing.xxxs})
        ${theme.spacing.xs};
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${theme.color.white};
      cursor: pointer;
      gap: ${theme.spacing.md};
      border: none;
      &:focus {
        box-shadow: none;
        transition: none;
      }
    }
  `}
`;

export const WrapperContentAccordion = styled.div<ContentProps>`
  ${({ $maxheight }) => css`
    max-height: ${$maxheight}px;
  `};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.md} ${theme.spacing.xs};
    background-color: ${theme.color.white};
    display: grid;
    gap: ${theme.spacing.xs};
    div {
      display: grid;
      gap: ${theme.spacing.md};
      grid-template-columns: auto auto;
      justify-content: space-between;
      border-style: dashed;
      border-bottom-width: 1px;
      border-top-width: 0;
      border-right-width: 0;
      border-left-width: 0;
      border-color: ${theme.color["gray-10"]};
      strong {
        font-weight: bold;
      }
    }
  `}
`;

export const Wrapperbutton = styled.span`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.xl};
    align-items: center;
  `}
`;

export const Image = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;
