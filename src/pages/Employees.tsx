import { useContext } from "react";
import EmployeesListDesktop from "../components/EmployeesListDesktop";
import EmployeesListMobile from "../components/EmployeesListMobile";
import TitlePage from "../components/TitlePage";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { EmployeesContext } from "../contexts/EmployeesContexts";
import { device } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import {
  EmployeesListResponse,
  InfiniteRotate,
  LoadingContainer,
} from "./EmployeesStyles";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";

function Employees() {
  const isMobile = useMediaQuery(device.tablet);
  const { isLoading } = useContext(EmployeesContext);

  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q") ? searchParams.get("q") : undefined;
  const { employees, isError } = useContext(EmployeesContext);

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

  if (isError) {
    return (
      <>
        <TitlePage />
        <EmployeesListResponse>Ocorreu um erro!</EmployeesListResponse>;
      </>
    );
  }

  if (!isError && employees.length <= 0) {
    return (
      <>
        <TitlePage />
        <EmployeesListResponse>
          <span>
            Nenhum resultado encontrado para o termo pesquisado:{" "}
            <strong>{querySearch}</strong>!
          </span>
        </EmployeesListResponse>
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
