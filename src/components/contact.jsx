import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { useForm } from "react-hook-form";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            'service_03lgrfo', 
            'template_1qcn5m3', 
            form.current, 
            'QkxmTOex1WCAKBjDz'
        )
        .then(
            (result) => {
                console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
  };

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <StyledContactForm>
        <form ref={form} onSubmit={sendEmail, handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
                {...register("name", {
                    required: "Please enter your name",
                    minlength: {
                        value: 3,
                        message: "Name must be at least 3 characters long",
                    },
                })}
                type="text" name="user_name" 
            />
            <p class="error">{errors.name?.message}</p>

            <label>Email</label>
            <input 
                {...register("email", {
                    required: "Email is required...",
                    pattern: {
                        value: 
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email must be valid"
                    },
                })} 
                type="email" name="user_email" 
            />
            <p class="error">{errors.email?.message}</p>


            <label>Message</label>
            <textarea {...register("message")} name="message" />
            <input type="submit" value="Send" />
        </form>
    </StyledContactForm>
  );
};

export default ContactUs;

const StyledContactForm = styled.div`
  width: 400px;

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
        border: 2px solid rgba(0, 206, 158, 1);
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
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(28, 200, 243);
      color: white;
      border: none;
    }
  }
`;