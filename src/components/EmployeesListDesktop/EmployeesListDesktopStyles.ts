import styled from "styled-components";
import { css } from "styled-components";
import { device } from "../../styles/global";

export const EmployeesListContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0px ${theme.spacing.lg} ;
     @media ${device.tablet} {
         padding: calc(${theme.spacing.xs} - 1.387px) ${theme.spacing.sm};
  `}
`;

export const EmployeesListContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0px ${theme.spacing.xxxs} ${theme.spacing.sm};
    margin-bottom:  ${theme.spacing.xxl};
    overflow-x: auto;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px !important;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${theme.color.primary};
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.color["gray-10"]}};
      border-radius: 8px;
    }
  `}
`;

export const EmployeesTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1px;
`;

export const ListTh = styled.th`
  ${({ theme }) => css`
    padding: ${theme.spacing.xs} ${theme.spacing.xxs};
    color: ${theme.color.white};
    font-size: ${theme.fontSize.sm};
    text-align: left;
    font-weight: 400;
    background-color: ${theme.color.primary};
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 0px;
      padding: ${theme.spacing.xs} ${theme.spacing.xxs} ${theme.spacing.xs}
        ${theme.spacing.xl};
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 0px;
      padding: ${theme.spacing.xs} ${theme.spacing.xl} ${theme.spacing.xs}
        ${theme.spacing.xxs};
    }
  `}
`;

export const ListTrH = styled.tr`
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
export const ListTr = styled.tr`
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ListTd = styled.td`
  ${({ theme }) => css`
    padding: ${theme.spacing.xs} ${theme.spacing.xxs};
    background-color: ${theme.color.white};
    color: ${theme.color.black};
    font-size: ${theme.fontSize.sm};
    text-align: left;
    font-weight: 400;
    &:first-child {
      padding: ${theme.spacing.xs} ${theme.spacing.xxs} ${theme.spacing.xs}
        ${theme.spacing.xl};
    }
    &:last-child {
      padding: ${theme.spacing.xs} ${theme.spacing.xl} ${theme.spacing.xs}
        ${theme.spacing.xxs};
    }
  `}
`;

export const Image = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;
