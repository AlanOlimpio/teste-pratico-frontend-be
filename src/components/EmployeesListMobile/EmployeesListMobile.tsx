import Accordion from "../Accordion";
import {
  Circle,
  EmployeesListContainer,
  WrapperInfo,
  WrapperListHeaderMobile,
} from "./EmployeesListMobileStyles";

function EmployeesListMobile() {
  return (
    <EmployeesListContainer>
      <WrapperListHeaderMobile>
        <WrapperInfo>
          <span>FOTO</span>
          <span>NOME</span>
        </WrapperInfo>
        <Circle>
          <span />
        </Circle>
      </WrapperListHeaderMobile>
      <Accordion
        phone="+55 (55) 55555-555"
        admission_date="00/00/0000"
        id="3423412"
        image="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
        job="Front-end"
        name="Giovana L. Arruda"
      />
    </EmployeesListContainer>
  );
}
export default EmployeesListMobile;
