import { HeaderContainer, HeaderContent } from "./HeaderStyles";
import logoImg from "../../assets/logo.svg";
function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="BeTalent" />
      </HeaderContent>
    </HeaderContainer>
  );
}
export default Header;
