import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FiArrowRight } from "react-icons/fi";

import "../../styles/homepagemaincontactform.css";

export default function ContactUs() {
  const [subject, setSubject] = useState("General Inquiry");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const subjects = [
    "General Inquiry",
    "Brand Identity",
    "UI/UX",
    "Packaging Design",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contactus_wrapper">
      {/* Ambient blobs */}
      <div className="contactus_blob contactus_blob--teal" />
      <div className="contactus_blob contactus_blob--green" />
      <div className="contactus_blob contactus_blob--green2" />
      <div className="contactus_blob contactus_blob--teal2" />

      <div className="contactus_hero">
        <h1 className="contactus_hero__title">Contact Us</h1>

        <p className="contactus_hero__subtitle">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="contactus_card">
        {/* Left Panel */}
        <div className="contactus_info">
          <div className="contactus_info__glow" />

          <h2 className="contactus_info__heading">
            Contact Information
          </h2>

          <p className="contactus_info__tagline">
            We'd love to hear from you.
          </p>

          <ul className="contactus_info__list">
            <li className="contactus_info__item">
              <span className="contactus_info__icon">✉</span>

              <span>info@passestate.com</span>
            </li>

            <li className="contactus_info__item">
              <span className="contactus_info__icon">📍</span>

              <span>
                2nd Floor, 46A Khayban e Iqbal
                <br />
                DHA Phase 3, Lahore
              </span>
            </li>
          </ul>

          <div className="contactus_info__socials">
                <a
              href="#"
              className="contactus_info__social-link"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>


            <a
              href="#"
              className="contactus_info__social-link"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

                        <a
  href="#"
  className="contactus_info__social-link"
  aria-label="Pinterest"
>
  <FaPinterestP />
</a>  

                    <a
              href="#"
              className="contactus_info__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="contactus_info__social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>


    
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="contactus_form__panel">
          <form
            className="contactus_form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contactus_form__row">
              <div className="contactus_form__group">
                <label
                  className="contactus_form__label"
                  htmlFor="firstName"
                >
                  First Name
                </label>

                <input
                  className="contactus_form__input"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="contactus_form__group">
                <label
                  className="contactus_form__label"
                  htmlFor="lastName"
                >
                  Last Name
                </label>

                <input
                  className="contactus_form__input"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="contactus_form__row">
              <div className="contactus_form__group">
                <label
                  className="contactus_form__label"
                  htmlFor="email"
                >
                  Email
                </label>

                <input
                  className="contactus_form__input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="contactus_form__group">
                <label
                  className="contactus_form__label"
                  htmlFor="phone"
                >
                  Phone Number
                </label>

                <div className="contactus_form__phone-wrap">
                  <span className="contactus_form__phone-prefix">
                    +92
                  </span>

                  <input
                    className="contactus_form__input contactus_form__input--phone"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0123456789"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            {/* Subject Section */}

            {/* <div className="contactus_form__group contactus_form__group--full">
              <label className="contactus_form__label">
                Select Subject?
              </label>

              <div className="contactus_form__subjects">
                {subjects.map((s) => (
                  <label
                    key={s}
                    className="contactus_form__subject-label"
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={s}
                      checked={subject === s}
                      onChange={() => setSubject(s)}
                      className="contactus_form__subject-radio"
                    />

                    <span className="contactus_form__subject-dot" />

                    <span className="contactus_form__subject-text">
                      {s}
                    </span>
                  </label>
                ))}
              </div>
            </div> */}

            <div className="contactus_form__group contactus_form__group--full">
              <label
                className="contactus_form__label"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="contactus_form__textarea"
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="contactus_form__footer">
              <button
                type="submit"
                className="contactus_form__submit"
              >
                <span>Send Message</span>

                <FiArrowRight className="contactus_form__submit-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}