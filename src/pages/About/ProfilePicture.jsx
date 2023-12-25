import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

const StyledProfilePicture = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1.8em);
  grid-template-columns: 5em 16em;
  column-gap: 0.7em;
  justify-content: center;
  .content-image {
    grid-row: 1 / 4;
    background-color: var(--color-grey-800);
    border-radius: 50%;
  }
  svg {
    cursor: pointer;
    transition: color 0.3s;
    font-size: 1.3em;
  }
  svg:hover {
    color: #0864c1;
  }
`;

function ProfilePicture() {
  return (
    <StyledProfilePicture>
      <div className="content-image">
        <img src="./about-profile.png" alt="" />
      </div>

      <h3>Marcos Daniel Teran Cruz</h3>
      <span>Software engineer</span>
      <FaLinkedin />
    </StyledProfilePicture>
  );
}

export default ProfilePicture;
