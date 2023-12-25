import { FaCode } from "react-icons/fa";
import styled from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 2.5em;
  border-bottom: 1px solid var(--color-grey-300);
  text-align: center;
  max-width: 450px;
  .logo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #5be9b9;
    display: grid;
    place-items: center;
    svg {
      font-size: 2em;
      color: var(--color-grey-800);
    }
  }
  h1 {
    margin-top: 1em;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 2em;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 8px;
    color: var(--color-brand-600);
    font-weight: 400;
    font-size: 1.1em;
  }
  ul {
    li {
      margin-bottom: 0.5em;
    }
  }
  &:last-child {
    border: none;
  }

  @media (min-width: ${breakpoints.xl}) {
    border-right: 1px solid var(--color-grey-300);
    border-bottom: none;
  }
`;

function ColumnDeveloper() {
  return (
    <Column>
      <span className="logo">
        <FaCode />
      </span>

      <h1>Frontend Developer</h1>
      <p>
        I like to code things from scratch, and enjoy bringing ideas to life in
        the browser.
      </p>

      <h2>Languages i speak</h2>
      <p>HTML, CSS, Sass, Git, Github</p>

      <h2>Dev tools:</h2>
      <ul>
        <li>Vercel</li>
        <li>Github</li>
        <li>Terminal</li>
        <li>Supabase</li>
        <li>Netlify</li>
      </ul>
    </Column>
  );
}

export default ColumnDeveloper;
