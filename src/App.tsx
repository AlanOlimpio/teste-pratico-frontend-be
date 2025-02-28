import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { device, GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import TitlePage from "./components/TitlePage";
import EmployeesListDesktop from "./components/EmployeesListDesktop";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Accordion from "./components/Accordion";

function App() {
  const isMobile = useMediaQuery(device.tablet);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <TitlePage />
      {isMobile ? (
        <div style={{ padding: "16px" }}>
          <Accordion
            phone="+55 (55) 55555-555"
            admission_date="00/00/0000"
            id="3423412"
            image="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
            job="Front-end"
            name="Giovana L. Arruda"
          />
          <Accordion
            phone="+55 (55) 55555-555"
            admission_date="00/00/0000"
            id="3423412"
            image="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
            job="Front-end"
            name="Giovana L. Arruda"
          />
        </div>
      ) : (
        <EmployeesListDesktop />
      )}
    </ThemeProvider>
  );
}

export default App;
