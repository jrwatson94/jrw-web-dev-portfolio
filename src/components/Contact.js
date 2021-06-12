import React from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config();


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target)

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="container">
      <div id="contact-title">
        <h2 className="title">Contact</h2>
        <hr></hr>
      </div>

      <form className="contact-form text-center" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" type="text" name="user_name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" class="form-control" name="user_email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" name="message" />
        </div>
        <input className="btn btn-primary" type="submit" value="Send" />
      </form>
    </div>
  );
}