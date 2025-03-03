import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";

import { EmployeesProvider } from "./contexts/EmployeesContexts";
import Employees from "./pages";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <EmployeesProvider>
        <Header />
        <Employees />
      </EmployeesProvider>
    </ThemeProvider>
  );
}

export default App;
