import styled from "styled-components";
import { FaCode } from "react-icons/fa";

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

const skills = [
  {
    icon: <FaCode />,
    title: "Frontend Developer",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    languages: "HTML, CSS, Sass, Git, Github",
    devtools: ["Vercel", "Github", "Terminal", "Supabase", "Netlify"],
  },
  {
    title: "Backend Developer",
    description: "I like the bridge between frontend and backend.",
    languages: "",
    devtools: ["SQLServer", "Node JS", "Express"],
  },
];

function SectionSkills() {
  return (
    <StyledSection>
      <div className="content">
        {skills.map((skill, i) => (
          <ColumnDeveloper
            key={i}
            title={skill.title}
            description={skill.description}
            languages={skills.languages}
            devtools={skill.devtools}
          />
        ))}
      </div>
    </StyledSection>
  );
}

export default SectionSkills;
