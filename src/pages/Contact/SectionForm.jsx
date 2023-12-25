import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import { breakpoints } from "../../styles/Breakpoints";
import { sendEmail } from "../../services/apiGmail";
import { useState } from "react";
import Message from "./Message";

const StyledSection = styled.section`
  display: grid;
  margin: 0 auto;
  padding: 5%;
  max-width: 1200px;

  h2 {
    margin-bottom: 1.5em;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 3em) 6em 3em;
  gap: 3.5em;

  label {
    display: block;
  }

  input,
  textarea {
    padding: 0.8em;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    color: #353535;
    border: 1.5px solid var(--color-grey-200);
  }

  button {
    border-radius: 1em;
  }

  .errors {
    color: var(--color-red-700);
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 3em);
    .message {
      grid-row: 1/3;
      grid-column: 2/3;
    }

    .button {
      grid-column: 1/3;
      display: flex;
      justify-content: flex-end;
    }
    .response {
      grid-column: 1/3;
    }
  }
`;

function SectionForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [isLoading, setIsLoading] = useState(false);
  const [messageSend, setMessageSend] = useState(null);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const message = await sendEmail(data);
      setMessageSend({ successfully: message });
    } catch (err) {
      setMessageSend({ error: err.message });
    } finally {
      setIsLoading(false);
      reset();
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <StyledSection>
      <h2>Send me an email</h2>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "This field is required",
            })}
            disabled={messageSend}
          />
          {errors?.name?.message && (
            <span className="errors">{errors.name.message}</span>
          )}
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            {...register("email", {
              required: "This field is required",
            })}
            disabled={messageSend}
          />
          {errors?.email?.message && (
            <span className="errors">{errors.email.message}</span>
          )}
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", {
              required: "This field is required",
            })}
            disabled={messageSend}
          />
          {errors?.message?.message && (
            <span className="errors">{errors.message.message}</span>
          )}
        </div>
        {messageSend ? (
          <Message
            className="response"
            text={Object.values(messageSend).at(0)}
            variant={Object.keys(messageSend).at(0)}
          />
        ) : (
          <div className="button">
            <Button size="small" disabled={isLoading}>
              Send email
            </Button>
          </div>
        )}
      </Form>
    </StyledSection>
  );
}

export default SectionForm;
