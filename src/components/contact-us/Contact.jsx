import React, { useContext, useRef, useState } from "react";
import "./Contact.scss";

import Phone from "../../img/phone.png";
import Address from "../../img/address.png";
import Email from "../../img/email.png";
import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const emailFormRef = useRef(null);
  const [email, setEmail] = useState('');
  const theme = useContext(ThemeContext);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(emailFormRef.current.value);
    const formData = new FormData(emailFormRef.current);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)
  };

  return (
    <div className={`contact-us${theme.state.darkMode? ' dark': ''}`}>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss your project!</h1>
          <div className="c-info-wrapper">
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a href="tel:+917787778877"> (+91) 7787778877</a>
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <a href="mailto:contact@me.dev">contact@me.dev</a>
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              <address>Somewhere in delhi</address>
            </div>
          </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> <br />
            Get in touch. Always available for freelancing if the right project
            comes along. <br />- me.
          </p>
          <form ref={emailFormRef} onSubmit={submitHandler} action="" method="POST" >
            <div className="styled-input">
              <input type="text" id="user_name"  name="user_name" required />
              <label htmlFor="user_name">Name</label>
            </div>
            <div className="styled-input">
              <input
                type="text"
                name="user_subject"
                id="user_subject"
                required
              />
              <label htmlFor="user_subject">Subject</label>
            </div>
            <div className={`styled-input${email ? ' filled': ''}`}>
              <input type="email" name="user_email" value={email} onInput={(e) => { setEmail(e.target.value)}} id="user_email" required />
              <label htmlFor="user_email">Email</label>
            </div>

            <div className="styled-input textarea">
              <textarea
                name="message"
                id="message"
                rows="5"
                required
              ></textarea>
              <label htmlFor="message">Content</label>
            </div>
            <div className="btn-wrapper">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
