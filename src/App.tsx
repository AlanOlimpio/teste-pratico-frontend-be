import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import TitlePage from "./components/TitlePage";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <TitlePage />
    </ThemeProvider>
  );
}

export default App;
