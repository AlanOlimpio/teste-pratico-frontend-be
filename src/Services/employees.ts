export function getEmployees(query?: string) {
  const url = new URL("http://localhost:3000/employees");

  if (query) {
    url.searchParams.append("q", query);
  }
  return fetch(url);
}
