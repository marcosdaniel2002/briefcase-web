import styled from "styled-components";

const StyledMoreProjects = styled.div`
  display: flex;
  padding: 3em 0;
`;

const Header = styled.header`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 2em;

  h2 {
    color: var(--color-brand-600);
  }
  span {
    border-bottom: 2px solid var(--color-brand-600);
    flex-grow: 1;
  }
`;

function MoreProjects() {
  return (
    <>
      <StyledMoreProjects>
        <Header>
          <h2>More projects</h2>
          <span></span>
        </Header>
      </StyledMoreProjects>
    </>
  );
}

export default MoreProjects;
