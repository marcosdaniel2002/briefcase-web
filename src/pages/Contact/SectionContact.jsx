import styled from "styled-components";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { breakpoints } from "../../styles/Breakpoints";

const StyledSectionContact = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5%;
  box-shadow: 0 4px 2px -2px var(--color-grey-300);

  img {
    max-width: 600px;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 3em;
  }
  p {
    color: var(--color-grey-500);
    font-size: 1.2em;
  }
  ul {
    padding-top: 2em;
    display: grid;
    gap: 1.6em;

    a {
      display: flex;
      align-items: center;
      gap: 0.5em;
      font-size: 1.2em;
      svg {
        font-size: 1.7em;
      }
    }

    @media (min-width: ${breakpoints.lg}) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

function SectionContact() {
  return (
    <StyledSectionContact>
      <Content>
        <h1>contact.</h1>
        <p>Get in touch with me via social media or email.</p>
        <ul>
          <li>
            <a href="">
              <AiFillTwitterSquare color="#189ACD" />
              Twitter
            </a>
          </li>
          <li>
            <a href="">
              <FaSquareFacebook color="#43609c" />
              Facebook
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin color="#0982c0" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="">
              <FaSquareInstagram color="#ef0074" />
              Instagram
            </a>
          </li>
        </ul>
      </Content>
      <img src="./contact-image.png" alt="contact image" />
    </StyledSectionContact>
  );
}

export default SectionContact;
