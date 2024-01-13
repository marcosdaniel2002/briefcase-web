import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  gap: 1em;
  & a {
    width: 2.5em;
    height: 2.5em;
    background-color: var(--color-grey-100);
    display: grid;
    place-items: center;

    border-radius: 50%;
    transition: background-color 0.3s, border 0.3s, transform 0.3s;

    &:hover {
      transform: translateY(-0.3em);
    }
  }

  & svg {
    font-size: 1.4em;
    color: var(--color-grey-900);
  }
`;

function SocialMedia() {
  return (
    <StyledContainer>
      <a
        href="https://github.com/marcosdaniel2002"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/marcos-t-a58537221/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/marcossdaniel20/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/marcosdaniel2002"
        target="_blank"
        rel="noreferrer"
      >
        <FaGoogle />
      </a>
    </StyledContainer>
  );
}

export default SocialMedia;
