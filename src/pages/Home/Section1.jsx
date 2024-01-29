import styled from "styled-components";
import Button from "../../ui/Button";
import TypeWriter from "../../ui/TypeWriter";
import { useState } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  padding: 5rem 0;
`;

const ContainerImage = styled.div`
  background-color: var(--color-blue-100);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  width: 300px;
  height: 300px;
  display: grid;
  place-content: center;
`;

const Image = styled.img`
  width: 250px;
`;

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  & span {
    font-size: 1.2em;
  }
`;

function Section1() {
  const [isModal, setIsModal] = useState(false);

  function onDownload() {
    const language =
      navigator.language || navigator.userLanguage === "es-ES" ? "ESP" : "ENG";
    window.open(`${language}_CV_Marcos Daniel Teran Cruz.pdf`);
  }

  return (
    <Section>
      <ContainerImage>
        <Image src="./web-developer-illustration-2005x2048-fal2biag.png" />
      </ContainerImage>
      <Content>
        <span>
          Hello, my name is<TypeWriter> Marcos Teran.</TypeWriter>
        </span>
        <span>I'm a web developer :)</span>
        <Button size="small" onClick={onDownload}>
          Download Curriculum
        </Button>
      </Content>
      {isModal && <Modal onClick={() => setIsModal((show) => !show)} />}
    </Section>
  );
}

export default Section1;
