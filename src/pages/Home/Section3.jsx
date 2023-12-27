import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { breakpoints } from "../../styles/Breakpoints";

const Section = styled.section`
  text-align: center;
  padding: 8rem 0;
  transition: background-color 0.3s, border 0.3s, transform 1s, opacity 1s;

  & h2 {
    margin: 5rem 0;
  }

  a {
    color: #1a8cff;
  }
  .container {
    margin: 5em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3em;
    @media (min-width: ${breakpoints.md}) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

function Section3() {
  return (
    <Section className="section--hidden">
      <h2>Some favorite projects</h2>
      <p>
        Here are a few past design projects I've worked on. Want to see more?{" "}
        <Link to="/projects">projects</Link>
      </p>
      <div className="container">
        <ProjectCard path="./forkify-home1.png" />
        <ProjectCard path="./wild-oasis-home1.png" />
        <ProjectCard path="./wild-oasis-home1.png" />
      </div>
    </Section>
  );
}

export default Section3;
