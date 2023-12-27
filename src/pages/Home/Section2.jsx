import styled from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";

const Section = styled.section`
  padding: 3em;
  transition: background-color 0.3s, border 0.3s, transform 1s, opacity 1s;
  article {
    margin: 2em 0;
  }

  h1 {
    color: var(--color-brand-600);
    font-size: 1.7em;
  }
  p {
    text-align: left;
    margin: 1em 0;
    line-break: anywhere;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 10em;
    article {
      max-width: 40vw;
      font-size: 1.2em;
    }

    .second-article {
      margin-left: auto;
    }
  }
`;

function Section2() {
  return (
    <Section className="section--hidden">
      <article className="first-article">
        <h1>Design</h1>
        <p>
          I'm probably not the typical designer positioned behind an Illustrator
          artboard adjusting pixels, but I design. Immersed in stylesheets
          tweaking font sizes and contemplating layouts is where you'll find me
          (~_^). I'm committed to creating fluent user experiences while staying
          fashionable.
        </p>
      </article>
      <article className="second-article">
        <h1>Engineering</h1>
        <p>
          In building JavaScript applications, I'm equipped with just the right
          tools, and can absolutely function independently of them to deliver
          fast, resilient solutions optimized for scale — performance and
          scalabilty are priorities on my radar.
        </p>
      </article>
    </Section>
  );
}

export default Section2;
