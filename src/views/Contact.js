import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="fullcenter">
      <h1 className="heavy">Contact</h1>
      <form
        action="https://formspree.io/danielrowemusic@gmail.com"
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          className="form-control input m-2"
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          className="form-control input m-2"
          placeholder="Email"
        />
        <textarea
          className="form-control textarea m-2"
          name="message"
          placeholder="Your message here..."
        />
        <input type="submit" value="Send Message" className="button m-2" />
      </form>
    </div>
  );
};

export default Contact;
