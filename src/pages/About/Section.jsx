import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import { breakpoints } from "../../styles/Breakpoints";

const StyledSection = styled.section`
  padding: 15% 15%;
  padding-bottom: 20rem;
  box-shadow: var(--shadow-lg);
  h1 {
    margin: 2em 0;
    text-align: center;
  }

  p {
    text-align: center;
    line-break: anywhere;
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
        I'm a Frontend Web Developer building the Front-end of Websites and Web
        Applications that leads to the success of the overall product. Check out
        some of my work in the Projects section. I also like sharing content
        related to the stuff that I have learned over the years in Web
        Development so it can help other people of the Dev Community. Feel free
        to Connect or Follow me on my Linkedin where I post useful content
        related to Web Development and Programming I'm open to Job opportunities
        where I can contribute, learn and grow. If you have a good opportunity
        that matches my skills and experience then don't hesitate to contact me.
      </p>
    </StyledSection>
  );
}

export default Section;
