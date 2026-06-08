import React from 'react';
import '../../styles/contactmainsec1.css';

const Contactmainsec1 = () => {
    return (
        <section className="sec1_contact-section">
            {/* Overlay for dark effect */}
            <div className="sec1_contact-overlay"></div>

            <div className="sec1_contact-container">
                {/* Left side Contact text */}
                <h2 className="sec1_contact-title">Contact Us</h2>

                {/* Optional Breadcrumb */}
                {/*
                <nav className="sec1_contact-breadcrumb">
                    <a href="/" className="sec1_contact-breadcrumb-link">Home</a>
                    <span className="sec1_contact-breadcrumb-separator">/</span>
                    <span className="sec1_contact-breadcrumb-current">Contact</span>
                </nav>
                */}
            </div>
        </section>
    );
};

export default Contactmainsec1;