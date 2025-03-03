import { useContext } from "react";
import EmployeesListDesktop from "../components/EmployeesListDesktop";
import EmployeesListMobile from "../components/EmployeesListMobile";
import TitlePage from "../components/TitlePage";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { EmployeesContext } from "../contexts/EmployeesContexts";
import { device } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import { InfiniteRotate, LoadingContainer } from "./EmployeesStyles";
import Loading from "../components/Loading";

function Employees() {
  const isMobile = useMediaQuery(device.tablet);
  const { isLoading } = useContext(EmployeesContext);
  if (isLoading) {
    return (
      <>
        <TitlePage />
        <LoadingContainer>
          <InfiniteRotate>
            <Loading color={defaultTheme.color.primary} size={70} />
          </InfiniteRotate>
        </LoadingContainer>
      </>
    );
  }
  return (
    <>
      <TitlePage />
      {isMobile ? <EmployeesListMobile /> : <EmployeesListDesktop />}
    </>
  );
}

export default Employees;
