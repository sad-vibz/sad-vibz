import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <p>Get in touch with me.</p>
      <a href='https://www.instagram.com/_sad_vibe_007/' target='_blank' rel='noopener noreferrer'>
        Click this to follow me on Instagram
        <i className="fab fa-instagram" style={{ marginLeft: '8px' }}></i>
      </a>
    </div>
  );
}

export default Contact;
