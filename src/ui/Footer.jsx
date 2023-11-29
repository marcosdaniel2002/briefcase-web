import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import FooterNav from "./FooterNav";

const StyledFooter = styled.footer`
  font-size: 0.9em;
  background-color: var(--color-grey-800);
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 2em;

  & .copyright {
    color: var(--color-grey-100);
    font-size: 0.8em;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <SocialMedia />
      <FooterNav />
      <div className="copyright">Copyright @2022; Designed by MARCOS TERAN</div>
    </StyledFooter>
  );
}

export default Footer;
