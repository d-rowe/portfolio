import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="fullcenter">
      <div className="card contact-card shadow">
        <h1 className="heavy">Contact</h1>
        <form
          action="https://formspree.io/danielrowemusic@gmail.com"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            className="form-control input name"
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            className="form-control input email"
            placeholder="Email"
          />
          <textarea
            className="form-control textarea message"
            name="message"
            placeholder="Your message here..."
          />
          <input
            type="submit"
            value="Send Message"
            className="btn btn-dark m-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
