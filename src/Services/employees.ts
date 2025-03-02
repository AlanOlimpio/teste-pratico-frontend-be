import { api } from "../lib/axios";

export function getEmployees(query?: string) {
  return api.get("employees", {
    params: {
      q: query,
    },
  });
}
