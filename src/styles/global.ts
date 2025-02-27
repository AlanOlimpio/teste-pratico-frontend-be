import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
  }

  input:focus {
    outline: 0;
    box-shadow: 0 0px 0px 1px ${theme.color.primary}!important;
    transition: 0.3s;
  }

  body {
    background-color: ${theme.color["gray-00"]};
    color: ${theme.color.black};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: 400 ${theme.fontSize.sm} "Roboto", sans-serif;
  }
`}
`;

const size = {
  tablet: "768px",
};

export const device = {
  tablet: `(max-width: ${size.tablet})`,
};
