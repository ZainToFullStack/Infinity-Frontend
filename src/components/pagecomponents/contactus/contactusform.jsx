import React from "react";
import "../../styles/contactformsec2.css";

const ContactFormSec2 = () => {
    return (
        <section className="sec2_contact">
            <div className="sec2_contact_container">

                {/* Contact Cards */}
                {/* <div className="sec2_contact_cards">

                    <div className="sec2_contact_card">
                        <div className="sec2_contact_icon">📞</div>
                        <h3>Phone</h3>
                        <p>+1 (555) 987-6543</p>
                        <p>+1 (555) 987-6541</p>
                    </div>

                    <div className="sec2_contact_card">
                        <div className="sec2_contact_icon">📍</div>
                        <h3>Location</h3>
                        <p>Blue Garage 789 St</p>
                        <p>Smalltown TX 23456</p>
                    </div>

                    <div className="sec2_contact_card">
                        <div className="sec2_contact_icon">✉</div>
                        <h3>Email</h3>
                        <p>hello@autorizen.mail</p>
                        <p>support@autorizen.mail</p>
                    </div>

                </div> */}

                {/* Contact Form Section */}
                <div className="sec2_contact_wrapper">

                    <div className="sec2_contact_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9305729153643!2d74.3592961760971!3d31.471095949574124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907004b04fb9b%3A0xc481d7b1df018872!2sInfinityCorps!5e0!3m2!1sen!2s!4v1773649718103!5m2!1sen!2s"
                            width="800"
                            height="600"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="sec2_contact_form_box">

                        <h2 className="sec2_contact_heading">
                            Send Us A Message
                        </h2>

                        <form className="sec2_contact_form">

                            <div className="sec2_contact_grid">

                                <input type="text" placeholder="Name" />
                                <input type="tel" placeholder="Phone" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Subject" />

                            </div>

                            <textarea placeholder="Your Message"></textarea>

                            <button type="submit">
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactFormSec2;