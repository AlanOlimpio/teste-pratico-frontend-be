import { createContext, ReactNode, useEffect, useState } from "react";
import { EmployeesProps } from "../interfaces/Employees";
import { getEmployees } from "../services/employees";
import { useSearchParams } from "react-router-dom";

interface EmployeesContextType {
  employees: EmployeesProps[];
  fetchEmployees: (query?: string) => Promise<void>;
  isLoading: boolean;
}

interface EmployeesProviderProps {
  children: ReactNode;
}

export interface urlParamsProps {
  q?: string;
}
export const EmployeesContext = createContext({} as EmployeesContextType);

export function EmployeesProvider({ children }: EmployeesProviderProps) {
  const [employees, setEmployees] = useState<EmployeesProps[]>([]);
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q") ? searchParams.get("q") : undefined;
  const [isLoading, setIsLoading] = useState(false);
  async function fetchEmployees() {
    setIsLoading(true);
    let urlParams: urlParamsProps = {};

    if (querySearch) {
      urlParams = {
        ...urlParams,
        q: querySearch,
      };
    }

    const response = await getEmployees(urlParams);
    setIsLoading(false);

    setEmployees(response.data);
  }

  useEffect(() => {
    fetchEmployees();
  }, [querySearch]);

  return (
    <EmployeesContext.Provider value={{ employees, fetchEmployees, isLoading }}>
      {children}
    </EmployeesContext.Provider>
  );
}
