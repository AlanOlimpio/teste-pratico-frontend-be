import { createContext, ReactNode, useEffect, useState } from "react";
import { EmployeesProps } from "../interfaces/Employees";
import { getEmployees } from "../Services/employees";

interface EmployeesContextType {
  employees: EmployeesProps[];
}

interface EmployeesProviderProps {
  children: ReactNode;
}
export const EmployeesContext = createContext({} as EmployeesContextType);

export function EmployeesProvider({ children }: EmployeesProviderProps) {
  const [employees, setEmployees] = useState<EmployeesProps[]>([]);

  async function loadEmployees() {
    const response = await getEmployees();
    const data = await response.json();
    setEmployees(data);
  }

  useEffect(() => {
    loadEmployees();
  }, []);
  return (
    <EmployeesContext.Provider value={{ employees: employees }}>
      {children}
    </EmployeesContext.Provider>
  );
}
