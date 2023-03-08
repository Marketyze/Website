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

        <ContactFormSection>

            <ContactInnerDescription>Success is not final; Failure is not fatal; It is the courage to continue that counts. Success is not final; Failure is not fatal; It is the courage to continue that counts. Success is not final; Failure is not fatal; It is the courage to continue that counts.</ContactInnerDescription>
            <ContactInnerQuote>- placeholder quote</ContactInnerQuote>

            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/marketyzeca/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/marketyze.ca/?hl=en' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
              <SocialIconLink href='https://ca.linkedin.com/company/marketyzeca' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
            </SocialIcons>

        </ContactFormSection>

        <ContactFormSectionForm>

          <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>

              <label>Name
                  <input type="text" name="user_name" required/>
              </label>

              <label style = {{marginTop: "1rem"}}>Email
                  <input type="email" name="user_email" required/>
              </label>


              <label style = {{marginTop: "1rem"}}>Message
                  <textarea name="message" required/>
              </label>

                <label>
                    <input type="submit" value="Send" />
                </label>
              </form>
            </StyledContactForm>

          </ContactFormSectionForm>

          </ContactFormBox>
        </ContactFormDiv>

    </MainDiv>
  );
};

export default ContactUs

// Styles
const MainDiv = styled.div`
    font-family: 'Lato', sans-serif;
    align-items: center;
    flex-direction: column;
    display: flex;
    height: 1100px;
    background: ${colors.white};

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

    @media screen and (max-width: 480px) {
        height: 1400px;
    }
`

const ContactTitle = styled.h1`
    font-size: 4rem;
    font-weight: 900;
    margin-top: 5rem;
    position: relative;
    color: ${colors.primaryTeal};
    width: 1500px;

    @media screen and (max-width: 1300px) {
      left: 3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 3rem;
    }
      
`

const ContactDescription = styled.p`
    font-size: 1.8rem;
    margin-top: 1rem;
    position: relative;
    font-weight: 700;
    width: 1500px;

    @media screen and (max-width: 1300px) {
      left: 3rem;
    }
    `
    

const ContactFormDiv = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.375s;
  width: 1510px;
  height: 600px;
  margin-top: 5rem;


  @media screen and (max-width: 1700px) {
    width: 1200px;
    transition: 0.375s;
  }
  @media screen and (max-width: 1350px) {
    width: 1050px;
    transition: 0.375s;
  }
  @media screen and (max-width: 1100px) {
    width: 480px;
    transition: 0.375s;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    transition: 0.375s;
  }
  `

const ContactFormBox = styled.div`
    padding: 5rem;
    background: ${colors.lightTeal};
    align-items: center;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    transition: 0.375s;

      @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
        transition: 0.375s;
        width: 480px;
      }


      @media screen and (max-width: 480px) {
        width: 350px;
      }
    `

const ContactFormSection = styled.div`
    height: 100%;
    transition: 0.375s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 3rem;

    @media screen and (max-width: 1100px) {
        width: 380px;
        transition: 0.375s;
        position: relative;
        right: 30px;
    }
    @media screen and (max-width: 480px) {
      width: 320px;
      transition: 0.375s;
      right: 55px;
  }
`

const ContactFormSectionForm = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 500px;
    margin-bottom: 3rem;

    @media screen and (max-width: 1100px) {
      width: 380px;
      transition: 0.375s;
      position: relative;
      right: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    transition: 0.375s;
    right: 55px;
}
`

const ContactInnerDescription = styled.p`
    font-family: 'Lato', sans-serif;
    color: white;
    line-height: 1.5;
    font-size: 1.8rem;
    margin-top: 2rem;
    position: relative;
    font-weight: 400;   
    transition: 0.375s;
    
    @media screen and (max-width: 1350px) {
      font-size: 1.5rem; 
      transition: 0.375s;
    }
    @media screen and (max-width: 480px) {
      font-size: 1.3rem; 
      transition: 0.375s;
    }
    `
const ContactInnerQuote = styled.p`
    font-family: 'Lato', sans-serif;
    color: white;
    font-size: 1.8rem;
    margin-top: 2rem;
    position: relative;
    font-weight: 400; 
    font-style: italic;  
    transition: 0.375s;
    
    @media screen and (max-width: 1350px) {
      font-size: 1.5rem; 
      transition: 0.375s;
    }
    `


const SocialIcons = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 5rem;
`

const SocialIconLink = styled.a`
    color: ${colors.primaryTeal};
    font-size: 40px;

    &:hover {
      transition: all 0.3s ease-in-out;
      color: ${colors.darkTeal};
    }
`

const StyledContactForm = styled.div`
  width: 800px;
  display: flex;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  position: relative;
  transition: 0.375s;
 
  @media screen and (max-width: 1700px) {
    width: 500px;
    transition: 0.375s;
  }
  
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin-top: 1rem;
    input {
      width: 690px;
      height: 35px;
      padding: 7px;
      outline: none;
      margin-top: 0.5rem;
      border-radius: 10px;
      border: 2px solid white;
      background: ${colors.darkTeal};
      transition: 0.375s;
      color: white;
      &:focus {
        border: 2px solid ${colors.primaryTeal};
      }
      @media screen and (max-width: 1700px) {
        width: 500px;
        transition: 0.375s;
      }
      @media screen and (max-width: 1100px) {
        width: 380px;
        transition: 0.375s;
      }
      @media screen and (max-width: 480px) {
        width: 300px;
        transition: 0.375s;
      }
    }
    textarea {
      min-width: 690px;
      max-width: 690px;
      max-height: 300px;
      min-height: 200px;
      padding: 7px;
      margin-top: 0.5rem;
      outline: none;
      border-radius: 10px;
      border: 2px solid white;
      background: ${colors.darkTeal};
      transition: 0.375s;
      color: white;
      &:focus {
        border: 2px solid ${colors.primaryTeal};
      }
      @media screen and (max-width: 1700px) {
        transition: 0.375s;
        min-width: 500px;
        max-width: 500px;
      }
      @media screen and (max-width: 1100px) {
        transition: 0.375s;
        min-width: 380px;
        max-width: 380px;
      }
      @media screen and (max-width: 480px) {
        min-width: 300px;
        max-width: 300px;
        transition: 0.375s;
      }
    }
    label {
        color: white;
        font-size: 1.2rem;
        font-weight: 700;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      width: 125px;
      height: 45px;
      color: ${colors.primaryTeal};
      border: none;
      font-weight: 700;
      font-size: 1.3rem;
      border-radius: 10px;
      background: white;
      position: absolute;
      right: 0;
   
      &:hover {
        scale: 1.05;
        transition: all 0.3s ease;
        color: ${colors.darkTeal};
      }
    }
  }
`