import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import {colors} from '../globals/colors';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'


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
      <ContactDescription>Feel free to send us an email or message us at any of our social media platforms!</ContactDescription>
        
      <ContactFormDiv>
        <ContactFormBox>
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


          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/marketyzeca/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/marketyze.ca/?hl=en' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
            <SocialIconLink href='https://ca.linkedin.com/company/marketyzeca' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
          </SocialIcons>

          </ContactFormBox>
        </ContactFormDiv>

    </MainDiv>
  );
};

export default ContactUs

// Styles
const MainDiv = styled.div`
    font-family: 'Lato', sans-serif;
    justify-content: center;
    flex-direction: column;
    display: flex;
    height: 1200px;

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

    @media screen and (max-width: 480px) {
        height: 1400px;
    }
`

const ContactTitle = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    font-weight: 900;
    position: relative;
    left: 22rem;
    color: ${colors.primaryTeal};
    width: 50%;

    @media screen and (max-width: 1300px) {
      left: 3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 3rem;
    }
      
`

const ContactDescription = styled.p`
    font-size: 1.8rem;
    margin-top: 2rem;
    position: relative;
    left: 22rem;
    font-weight: 700;
    width: 60%;

    @media screen and (max-width: 1300px) {
      left: 3rem;
    }
    `
    

const ContactFormDiv = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
  `

const ContactFormBox = styled.div`
  padding: 5rem;
  border: 2px solid transparent;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

`

const SocialIcons = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const SocialIconLink = styled.a`
    color: ${colors.primaryTeal};
    font-size: 40px;

    &:hover {
      transition: all 0.3s ease-in-out;
      color: ${colors.lightTeal};
    }
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
      max-height: 300px;
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
      font-weight: 700;
      font-size: 0.9rem;


      &:hover {
        transition: all 0.5s ease-in-out;
        color: black;
        background: ${colors.lightTeal};
      }
    }
  }
`