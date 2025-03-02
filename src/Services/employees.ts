import { urlParamsProps } from "../contexts/EmployeesContexts";
import { api } from "../lib/axios";

export function getEmployees(urlParams: urlParamsProps) {
  return api.get("employees", {
    params: urlParams,
  });
}
