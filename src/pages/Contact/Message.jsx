import styled, { css } from "styled-components";

const StyledMessage = styled.div`
  ${(props) =>
    props.$variant === "error" &&
    css`
      border: 1.5px solid var(--color-red-700);
      background-color: var(--color-red-100);
    `}
  ${(props) =>
    props.$variant === "successfully" &&
    css`
      border: 1.5px solid var(--color-green-700);
      background-color: var(--color-green-100);
    `}
    color: #333333;
  border-radius: 4px;
  display: grid;
  place-items: center;
`;

function Message({ className, text, variant }) {
  return (
    <StyledMessage className={className} $variant={variant}>
      <span>{text}</span>
    </StyledMessage>
  );
}

export default Message;
