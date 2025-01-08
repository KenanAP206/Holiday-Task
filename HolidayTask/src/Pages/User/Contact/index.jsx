import React, { useState } from 'react';
import './Contact.css';
import Locater from '../../../Components/User/Locater/index'
function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Mesajınız başarıyla gönderildi!");
    setFormData({ email: '', message: '' });
  };

  return (
    <>
    <Locater location='Contact' />
    <section id='contact'>
            <div className="contact-container">

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et dolore.</p>
        <p className="contact-bold">69 North Cleveland Street, Memphis, USA.</p>
        <p>(123) 8111 9210 - (012) 1111 6868</p>
        <p>Florisr@supportthem.com</p>
      </div>

  
      <div className="contact-form">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresinizi girin"
            required
          />
          
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı yazın"
            required
            rows="4"
          />
          
          <button type="submit">Send</button>
        </form>
      </div>


      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d98240.37282430535!2d-86.38687!3d39.694442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1736365979088!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </section>
    </>

  );
}

export default Contact;
