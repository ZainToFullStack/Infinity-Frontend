import "../../styles/homepagemainsec6.css";
import Counter from "../../utils/data/counter";
import { useState, useRef, useEffect } from "react";

const stats = [
    {
        number: 35,
        title: "Prime Consultants Projects",
        description:
            "Prime Consultants has managed 35 major projects in DHA and LDA, delivering quality construction solutions, expert planning, and client satisfaction across multiple ongoing projects.",
    },
    {
        number: 12,
        title: "Cozones Workspaces",
        description:
            "Cozones provides hassle-free coworking spaces across Pakistan. We have successfully delivered 12 office hubs, empowering freelancers, startups, and businesses with flexible, cost-effective, and tech-enabled workspaces.",
    },
    {
        number: 5,
        title: "GHB Projects",
        description:
            "GHB offers a complete solution for construction, fiber, and smart infrastructure projects. Our services include network & fiber equipment deployment, splicing, P2P connectivity, parking management systems, surveillance, toll lane control, and data center solutions, ensuring full-scale project delivery nationwide.",
    },
    {
        number: 50,
        title: "Casaforte Global Projects",
        description:
            "Casaforte Global provides a one-stop solution for construction and retail in Pakistan, supplying high-quality building, finishing, and furnishing materials, while offering retail, dining, and entertainment options to create a seamless, convenient experience for every project.",
    },
];

function Homesec6() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true); // Trigger animation when section comes into view
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.3 } // Adjust how much of the section must be visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="success-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <div className="divider" />
                    <h2>Success Counts</h2>
                    <div className="divider" />
                </div>

                <p className="subtitle">
                    Creative and interactive Business Agency
                </p>

                <div className="stats-grid">
                    {stats.map((item, index) => (
                        <div
                            className="stat-card"
                            key={index}
                            onClick={() => toggleExpand(index)}
                        >
                            <h3>
                                {visible ? <Counter end={item.number} /> : 0}+
                            </h3>
                            <hr />
                            <h4>{item.title}</h4>
                            <p
                                style={{
                                    maxHeight:
                                        expandedIndex === index
                                            ? "500px"
                                            : "5.6rem",
                                }}
                            >
                                {item.description}
                            </p>
                            <button
                                className="read-more"
                                style={{
                                    display: expandedIndex === index
                                        ? "none"
                                        : "inline-block",
                                }}
                            >
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Homesec6;
