import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";
import ContactAnimation from "../../utils/animations/ContactAnimation";
import Loader from "../../utils/Loader/Loader";

const ContactSection = () => {
  
  ContactAnimation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const serviceId = 'service_vm2zrc9';
  const templateId = 'template_zfenwia';
  const publicKey = 'wANMLvVwjTB7NrdU_';

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'Dhruv Kashyap',
    message
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("sent", response);
      setName('');
      setEmail('');
      setMessage('');
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error', error);
    })
    e.preventDefault();
  }
  return (
    <div id="contact" className="main5">
      <div className="marquee-text-container main-text">
        <div className="marquee-text">
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
        </div>
        <div className="marquee-text">
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
          <p> Say Hello! &nbsp;</p>
        </div>
      </div>
      <div className="form-container">
        <div className="form-heading">
          <p className="main-text">Contact <span className="italic-text">Me</span></p>
        </div>

        {isLoading
          ? <div className="loader-container">
              <Loader/>
            </div>
          : <form onSubmit={handleSubmit}>
              <input required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Full Name"/>
              <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id="" placeholder="Email"/>
              <textarea required onChange={(e) => setMessage(e.target.value)} value={message} name="message" id="" placeholder="Your message"></textarea>
              <button type="submit" className="basic-button">Submit</button>
            </form>
        }
      </div>
    </div>
  );
};

export default ContactSection;
