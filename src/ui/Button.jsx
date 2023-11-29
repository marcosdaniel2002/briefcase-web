import styled, { css } from "styled-components";

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  theme: css`
    border: 2px solid var(--color-grey-300);
    background-color: var(--color-grey-100);
    color: var(--color-grey-900);

    &:hover {
      border: 2px solid var(--color-grey-900);
    }
  `,
};

const sizes = {
  small: css`
    font-size: 1.2rem;
  `,
  medium: css`
    font-size: 1.4rem;
  `,
};

const Button = styled.button`
  border-radius: 99999px;
  padding: 1.5em 4em;
  margin: auto;
  border: none;
  display: flex;
  align-items: center;
  gap: 1em;

  & svg {
    font-size: 1.5em;
    color: var(--color-grey-900);
  }

  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
