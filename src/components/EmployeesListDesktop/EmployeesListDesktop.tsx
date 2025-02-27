import {
  EmployeesListContainer,
  EmployeesListContent,
  EmployeesTable,
  ListTd,
  ListTh,
  Image,
  ListTr,
  ListTrH,
} from "./EmployeesListDesktopStyles";

function EmployeesListDesktop() {
  return (
    <EmployeesListContainer>
      <EmployeesListContent>
        <EmployeesTable>
          <thead>
            <ListTrH>
              <ListTh>FOTO</ListTh>
              <ListTh>NOME</ListTh>
              <ListTh>CARGO</ListTh>
              <ListTh>DATA DE ADMISSÃO</ListTh>
              <ListTh>TELEFONE</ListTh>
            </ListTrH>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <ListTr key={i}>
                <ListTd>
                  <Image
                    src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                    alt=""
                  />
                </ListTd>
                <ListTd>Giovana L. Arruda</ListTd>
                <ListTd>Front-end</ListTd>
                <ListTd>00/00/0000</ListTd>
                <ListTd>+55 (55) 55555-555</ListTd>
              </ListTr>
            ))}
          </tbody>
        </EmployeesTable>
      </EmployeesListContent>
    </EmployeesListContainer>
  );
}
export default EmployeesListDesktop;
