import { createContext, ReactNode, useEffect, useState } from "react";
import { EmployeesProps } from "../interfaces/Employees";
import { getEmployees } from "../Services/employees";

interface EmployeesContextType {
  employees: EmployeesProps[];
  fetchEmployees: (query?: string) => Promise<void>;
}

interface EmployeesProviderProps {
  children: ReactNode;
}
export const EmployeesContext = createContext({} as EmployeesContextType);

export function EmployeesProvider({ children }: EmployeesProviderProps) {
  const [employees, setEmployees] = useState<EmployeesProps[]>([]);

  async function fetchEmployees(query?: string) {
    const response = await getEmployees(query);

    setEmployees(response.data);
  }

  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <EmployeesContext.Provider value={{ employees, fetchEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
}
