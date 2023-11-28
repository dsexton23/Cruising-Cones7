import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";
import { useForm } from 'react-hook-form';

export const Contact = () => {
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
                form.current.reset();
            }, 
            (error) => {
                console.log(error.text);
            }
        );

        handleSubmit(onSubmit);
  };

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => console.log(data);

  return (
      <div>
        <div className="contactHeading">
          <h1>Contact us to book your next Event!</h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
      </div>
  );
};

export default Contact;