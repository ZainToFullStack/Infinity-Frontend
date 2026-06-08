import React from "react";
import "../../styles/homepagemainsec5.css";

import {
    FaUsers,
    FaSearch,
    FaCogs,
    FaHistory,
    FaUserCheck,
    FaHeadset
} from "react-icons/fa";

const Homesec5 = () => {
    return (
        <section className="features-section">
            {/* Title */}
            <div className="features-title-wrapper">
                <span className="line"></span>
                <h2 className="features-title">Best Features</h2>
                <span className="line"></span>
            </div>

            {/* Subtitle */}
            <p className="features-subtitle">
                Delivering reliable, customizable, and client-oriented solutions through experienced professionals.
            </p>

            {/* Features Grid */}
            <div className="features-grid">
                {features.map((item, index) => (
                    <div className="feature-card" key={index}>
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <div className="divider"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const features = [
    {
        title: "Professional Team",
        desc: "Our projects are handled by experienced professionals including engineers, consultants, designers, and technical staff who work together to deliver reliable construction, consultancy, coworking, and IT solutions.",
        icon: <FaUsers />,
    },
    {
        title: "Attention To Details",
        desc: "From grey structure to finishing materials, from planning to execution, we focus on every small detail to ensure quality, accuracy, and long-term value across all our ongoing projects.",
        icon: <FaSearch />,
    },
    {
        title: "Easy Customization",
        desc: "Our services are flexible and customizable according to client needs, whether it is house construction consultancy, workspace requirements, material selection, or computer and technical services.",
        icon: <FaCogs />,
    },
    {
        title: "Good History Impact",
        desc: "With successfully running projects like Casaforte Global, Prime Consultants, Cozones, and GHB, we have built a strong foundation of trust, experience, and practical industry knowledge.",
        icon: <FaHistory />,
    },
    {
        title: "Client-Orientation",
        desc: "We prioritize client satisfaction by understanding their goals, guiding them through every stage, and offering transparent support to help them make informed decisions with confidence.",
        icon: <FaUserCheck />,
    },
    {
        title: "Customer Support",
        desc: "Our team provides continuous support for construction guidance, consultancy, coworking assistance, and computer services, ensuring clients always have help when they need it.",
        icon: <FaHeadset />,
    },
];


export default Homesec5;
