import Chevron from "./Chevron";
import { EmployeesProps } from "../../interfaces/Employees";
import {
  AccordionWrapper,
  WrapperContentAccordion,
  Container,
  AccordionChevron,
  Image,
  Wrapperbutton,
} from "./AccordionStyles";
import { useCallback, useRef, useState } from "react";

function Accordion({
  phone,
  admission_date,
  image,
  job,
  name,
}: EmployeesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight =
    isOpen && contentRef?.current?.clientHeight
      ? contentRef?.current?.clientHeight + 4
      : 0;
  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <AccordionWrapper>
      <button onClick={handleToggle}>
        <Wrapperbutton>
          <Image src={image} alt={name} />
          <span>{name}</span>
        </Wrapperbutton>
        <AccordionChevron $direction={isOpen ? "top" : "bottom"}>
          <Chevron />
        </AccordionChevron>
      </button>

      <WrapperContentAccordion $maxheight={contentHeight}>
        <Container ref={contentRef}>
          <div>
            <strong>Cargo</strong>
            <span>{job}</span>
          </div>
          <div>
            <strong>Data de admissão</strong>
            <span>{admission_date}</span>
          </div>
          <div>
            <strong>Telefone</strong>
            <span>{phone}</span>
          </div>
        </Container>
      </WrapperContentAccordion>
    </AccordionWrapper>
  );
}

export default Accordion;
