import styled from "styled-components";
import ColumnDeveloper from "./ColumnDeveloper";
import { breakpoints } from "../../styles/Breakpoints";

const StyledSection = styled.section`
  transform: translateY(-10em);
  display: flex;
  justify-content: center;
  padding: 0 2em;

  .content {
    display: flex;
    flex-direction: column;
    border-radius: 1.7em;
    background-color: var(--color-grey-100);
    overflow: hidden;
    border: 1px solid var(--color-grey-300);

    @media (min-width: ${breakpoints.xl}) {
      flex-direction: row;
    }
  }
`;

function SectionSkills() {
  return (
    <StyledSection>
      <div className="content">
        <ColumnDeveloper />
        <ColumnDeveloper />
        <ColumnDeveloper />
      </div>
    </StyledSection>
  );
}

export default SectionSkills;
