import styled from "styled-components";

import { FaRegFilePdf } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  height: 100dvh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 600;

  .content {
    width: 300px;
    height: 300px;
    background-color: var(--color-grey-200);
    border-radius: 1em;
    box-shadow: var(--shadow-lg);
    position: relative;
    button {
      all: unset;
      position: absolute;
      top: 0.4em;
      right: 0.4em;
      font-size: 1.5em;
      width: 1.3em;
      height: 1.3em;
      border-radius: 50%;
      display: grid;
      place-items: center;
      transition: all 0.3s;
      cursor: pointer;
    }
  }
  h2 {
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 3.5em;
    margin-bottom: 1em;
    text-align: center;
    color: var(--color-brand-600);
  }

  .container {
    display: flex;
    gap: 2.5em;
    justify-content: center;
  }

  .download {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5em 0;
    span {
      font-weight: 500;
    }
    a {
      font-size: 2.5em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.5em;
      width: 1.5em;
      transition: all 0.3s;
    }
    a:hover {
      color: var(--color-red-700);
    }
  }
`;

function Modal({ onClick }) {
  useEffect(function () {
    document.body.classList.add("scrollHidden");

    return function cleanup() {
      document.body.classList.remove("scrollHidden");
    };
  }, []);
  return (
    <StyledModal>
      <div className="content">
        <button onClick={onClick}>
          <IoClose />
        </button>
        <h2>Choose the language</h2>
        <div className="container">
          <div className="download">
            <span>ENG Version</span>
            <a href="./ENG_CV_Marcos Daniel Teran Cruz.pdf" download>
              <FaRegFilePdf />
            </a>
          </div>
          <div className="download">
            <span>ESP Version</span>
            <a href="./ESP_CV_Marcos Daniel Teran Cruz.pdf" download>
              <FaRegFilePdf />
            </a>
          </div>
        </div>
      </div>
    </StyledModal>
  );
}

export default Modal;
