import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { useExtendNavbar } from "../context/ExtendNavbarContext";

const StyledHamburguer = styled.div`
  .visuallyHidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 0.05em;
    width: 0.05em;
    margin: -0.05em;
    padding: 0;
    border: 0;
  }
  .hamburger {
    margin: 0 auto;
    // margin-top: 30px;
    width: 1.5em;
    height: 1.5em;
    position: relative;
    cursor: pointer;
  }

  .hamburger .bar {
    padding: 0;
    width: 1.5em;
    height: 0.2em;
    background-color: var(--color-grey-800);
    display: block;
    border-radius: 0.2em;
    transition: all 0.4s ease-in-out;
    position: absolute;
  }

  .bar1 {
    top: 0;
  }

  .bar2,
  .bar3 {
    top: 0.675em;
  }

  .bar3 {
    right: 0;
  }

  .bar4 {
    bottom: 0;
  }

  /* HAMBURGER 3 */

  .hamburger3 .bar1 {
    transform-origin: 5%;
  }

  .hamburger3 .bar4 {
    transform-origin: 5%;
  }

  .checkbox3:checked + label > .hamburger3 > .bar1 {
    transform: rotate(45deg);
    height: 0.15em;
    width: 2.1em;
  }

  .checkbox3:checked + label > .hamburger3 > .bar3 {
    transform: rotate(45deg);
    height: 0.15em;
    background-color: transparent;
  }

  .checkbox3:checked + label > .hamburger3 > .bar2 {
    transform: rotate(-45deg);
    height: 0.15em;
    background-color: transparent;
  }

  .checkbox3:checked + label > .hamburger3 > .bar4 {
    transform: rotate(-45deg);
    height: 0.15em;
    width: 2.1em;
  }
  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;

function Hamburguer() {
  const { isExtend, toggleExtendNavbar } = useExtendNavbar();

  return (
    <StyledHamburguer>
      <input
        type="checkbox"
        id="checkbox3"
        className="checkbox3 visuallyHidden"
        checked={isExtend}
        onChange={toggleExtendNavbar}
      />
      <label htmlFor="checkbox3">
        <div className="hamburger hamburger3">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </StyledHamburguer>
  );
}

export default Hamburguer;
