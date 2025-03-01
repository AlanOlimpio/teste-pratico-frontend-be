import { useContext } from "react";
import {
  EmployeesListContainer,
  EmployeesListContent,
  EmployeesTable,
  ListTd,
  ListTh,
  Image,
  ListTr,
  ListTrH,
} from "./EmployeesListDesktopStyles";
import { EmployeesContext } from "../../contexts/EmployeesContexts";
import { dateFormatter, phoneFormatter } from "../../utils/formatter";

function EmployeesListDesktop() {
  const { employees } = useContext(EmployeesContext);
  return (
    <EmployeesListContainer>
      <EmployeesListContent>
        <EmployeesTable>
          <thead>
            <ListTrH>
              <ListTh>FOTO</ListTh>
              <ListTh>NOME</ListTh>
              <ListTh>CARGO</ListTh>
              <ListTh>DATA DE ADMISSÃO</ListTh>
              <ListTh>TELEFONE</ListTh>
            </ListTrH>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <ListTr key={employee.id}>
                <ListTd>
                  <Image src={employee.image} alt="" />
                </ListTd>
                <ListTd>{employee.name}</ListTd>
                <ListTd>{employee.job}</ListTd>
                <ListTd>
                  {dateFormatter.format(new Date(employee.admission_date))}
                </ListTd>
                <ListTd>{phoneFormatter(employee.phone)}</ListTd>
              </ListTr>
            ))}
          </tbody>
        </EmployeesTable>
      </EmployeesListContent>
    </EmployeesListContainer>
  );
}
export default EmployeesListDesktop;
