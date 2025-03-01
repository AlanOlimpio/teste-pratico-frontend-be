import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { device, GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import TitlePage from "./components/TitlePage";
import EmployeesListDesktop from "./components/EmployeesListDesktop";
import { useMediaQuery } from "./hooks/useMediaQuery";
import EmployeesListMobile from "./components/EmployeesListMobile";

function App() {
  const isMobile = useMediaQuery(device.tablet);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <TitlePage />
      {isMobile ? <EmployeesListMobile /> : <EmployeesListDesktop />}
    </ThemeProvider>
  );
}

export default App;
