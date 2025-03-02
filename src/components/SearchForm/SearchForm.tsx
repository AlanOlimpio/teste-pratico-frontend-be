import * as z from "zod";

import { SearchFormContainer } from "./SearchFormStyles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MagnifyingGlass from "../MagnifyingGlass";

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") ? searchParams.get("q") : undefined;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearch(data: SearchFormInputs) {
    if (data.query) {
      searchParams.delete("page");
      setSearchParams((params) => {
        params.set("q", data.query);
        return params;
      });
    }
    if (!data.query) {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
  }

  useEffect(() => {
    if (searchQuery) {
      setValue("query", searchQuery);
    }
  }, [searchQuery]);

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
