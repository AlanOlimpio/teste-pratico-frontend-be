import * as z from "zod";

import { SearchFormContainer } from "./SearchFormStyles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MagnifyingGlass from "../MagnifyingGlass";
import { useContext } from "react";
import { EmployeesContext } from "../../contexts/EmployeesContexts";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchForm() {
  const { fetchEmployees } = useContext(EmployeesContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearch(data: SearchFormInputs) {
    await fetchEmployees(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input type="text" placeholder="Pesquisar" {...register("query")} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
      </button>
    </SearchFormContainer>
  );
}

export default SearchForm;
