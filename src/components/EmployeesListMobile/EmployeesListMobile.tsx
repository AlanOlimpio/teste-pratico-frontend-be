import { useContext } from "react";
import Accordion from "../Accordion";
import {
  Circle,
  EmployeesListContainer,
  WrapperInfo,
  WrapperListHeaderMobile,
} from "./EmployeesListMobileStyles";
import { EmployeesContext } from "../../contexts/EmployeesContexts";
import { dateFormatter, phoneFormatter } from "../../utils/formatter";

function EmployeesListMobile() {
  const { employees } = useContext(EmployeesContext);
  return (
    <EmployeesListContainer>
      <WrapperListHeaderMobile>
        <WrapperInfo>
          <span>FOTO</span>
          <span>NOME</span>
        </WrapperInfo>
        <Circle>
          <span />
        </Circle>
      </WrapperListHeaderMobile>
      {employees.map((employee) => {
        return (
          <Accordion
            key={employee.id}
            phone={phoneFormatter(employee.phone)}
            admission_date={dateFormatter.format(
              new Date(employee.admission_date)
            )}
            id={employee.id}
            image={employee.image}
            job={employee.job}
            name={employee.name}
          />
        );
      })}
    </EmployeesListContainer>
  );
}
export default EmployeesListMobile;
