import SearchForm from "../SearchForm";
import { TitlePageContainer, TitlePageContent } from "./TitlePageStyles";

function TitlePage() {
  return (
    <TitlePageContainer>
      <TitlePageContent>
        <h1>Funcionários</h1>
        <SearchForm />
      </TitlePageContent>
    </TitlePageContainer>
  );
}
export default TitlePage;
