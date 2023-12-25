import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import { breakpoints } from "../../styles/Breakpoints";

const StyledSection = styled.section`
  background-color: var(--color-brand-600);
  padding: 15% 15%;
  padding-bottom: 20rem;
  h1 {
    margin: 2em 0;
    text-align: center;
  }

  p {
    text-align: center;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 5% 30%;
    padding-bottom: 30rem;
  }
`;

function Section() {
  return (
    <StyledSection>
      <ProfilePicture />
      <h1>Hi there!, Nice to meet you.</h1>
      <p>
        Since beginning my journey as a freelance designer over 11 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chops one design problem at a time.
      </p>
    </StyledSection>
  );
}

export default Section;
