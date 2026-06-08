import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/homepagemainsec3.css";

function Homesec3() {

    const content = {
        Mission: {
            text:
                "Our mission is to deliver reliable computer and IT solutions while building and showcasing meaningful projects. We aim to help individuals and businesses leverage technology effectively.",
            image:
                "https://plus.unsplash.com/premium_photo-1661421746164-b8b53de3bd4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        Vision: {
            text:
                "Our vision is to become a trusted technology brand, expanding our project portfolio and offering advanced IT and digital solutions for a wide range of clients.",
            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1974&auto=format&fit=crop",
        },

        Awards: {
            text:
                "Our achievements include successful projects, technical milestones, and satisfied clients. We continuously strive for excellence in every project we undertake.",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1974&auto=format&fit=crop",
        },
    };

    const [activeTab, setActiveTab] = useState("Mission");

    return (
        <section className="about-sectionn">

            <div className="about-container">

                {/* LEFT IMAGE */}
                <div className="about-image">
                    <div className="image-overlay"></div>

                    <img
                        key={activeTab}
                        src={content[activeTab].image}
                        alt={activeTab}
                        className="dynamic-img"
                    />
{/* 
                    <div className="floating-badge">
                        <span>01</span>
                        <p>{activeTab}</p>
                    </div> */}

                    <div className="floating-badge">
    <span>
        {activeTab === "Mission"
            ? "01"
            : activeTab === "Vision"
                ? "02"
                : "03"}
    </span>

    <p>{activeTab}</p>
</div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="about-content">

                    <h2 className="about-title">
                        About Us
                        <span className="title-line"></span>
                    </h2>

                    <p className="about-intro">
                        Infinity Corps showcases our working projects and provides professional computer and IT services to help businesses and individuals leverage technology.
                    </p>

                    {/* TABS */}
                    <nav className="about-tabs">
                        {Object.keys(content).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={activeTab === tab ? "tab active" : "tab"}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>

                    {/* DYNAMIC CONTENT */}
                    <div className="about-text fade-content">
                        <p>{content[activeTab].text}</p>
                    </div>

                    {/* BUTTON */}
                    <NavLink to="/contact" className="about-btn">
                        CONTACT US
                        <span className="arrow">→</span>
                    </NavLink>

                </div>
            </div>
        </section>
    );
}

export default Homesec3;