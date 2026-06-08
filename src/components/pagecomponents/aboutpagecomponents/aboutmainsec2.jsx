import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../../styles/Aboutmainsec2.css";

const Aboutmainsec2 = () => {
  return (
    <section className="business-section">
      <div className="business-section__container">
        {/* Left Text Content */}
        <div className="business-section__content">
          <h2 className="business-section__title">
            HIGH QUALITY SERVICES, IS ABLE TO SERVE YOU.
          </h2>
          <p className="business-section__text">
  We combine industry expertise with innovative strategies to deliver exceptional results. 
  Our dedicated team is fully equipped to meet your unique needs and elevate your business 
  to the next level.
</p>
          <Link to="/contact" className="business-section__button">
            CONTACT US
            <HiArrowNarrowRight className="business-section__button-icon" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="business-section__image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="People Business Meeting"
            className="business-section__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutmainsec2;
