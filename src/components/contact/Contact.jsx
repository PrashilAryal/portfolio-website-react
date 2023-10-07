import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email.
          </p>
          <p className="contact__email">prashilaryal13@gmail.com</p>
        </div>

        <form
          action="mailto:prashilaryal13@gmail.com"
          className="contact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Full Name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Subject"
            />
          </div>

          <div className="contact__form-div">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input contact__form-area"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <br />
          <a href="mailto:prashilaryal13@gmail.com?subject=subject"></a>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
