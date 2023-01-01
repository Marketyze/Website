import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import {colors} from '../globals/colors';

//fix emailjs
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_pnechn8', 
        'template_i355z3s', 
        form.current, 
        '_n-z4vnIdekFMS5Nl')

      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset(); 

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <MainDiv>
      <ContactTitle>Have Questions?</ContactTitle>
      <ContactDescription>Feel free to send us an Email or message us at any of our social media platforms!</ContactDescription>
        
      <ContactFormDiv>
        <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </ContactFormDiv>

    </MainDiv>
  );
};

export default ContactUs

// Styles
const MainDiv = styled.div`
    justify-content: center;
    flex-direction: column;
    display: flex;
    height: 80vh;
`

const ContactTitle = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
`

const ContactDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
`

const ContactFormDiv = styled.div`
    display: flex;
    justify-content: center;
`

const StyledContactForm = styled.div`
  width: 40vw;
  display: flex;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid ${colors.lightTeal};
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid ${colors.lightTeal};
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: ${colors.primaryTeal};
      color: white;
      border: none;
    }
  }
`