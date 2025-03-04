import { createContext, ReactNode, useEffect, useState } from "react";
import { EmployeesProps } from "../interfaces/Employees";
import { getEmployees } from "../services/employees";
import { useSearchParams } from "react-router-dom";

interface EmployeesContextType {
  employees: EmployeesProps[];
  fetchEmployees: (query?: string) => Promise<void>;
  isLoading: boolean;
  isError: boolean;
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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsErrors] = useState(false);
  async function fetchEmployees() {
    let urlParams: urlParamsProps = {};

    if (querySearch) {
      urlParams = {
        ...urlParams,
        q: querySearch,
      };
    }

    try {
      setIsLoading(true);
      const response = await getEmployees(urlParams);
      setEmployees(response.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setIsErrors(true);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, [querySearch]);

  return (
    <EmployeesContext.Provider
      value={{ employees, fetchEmployees, isLoading, isError }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}
