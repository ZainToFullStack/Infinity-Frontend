import React from 'react';
import '../../styles/projectsmainsec1.css';

const Projectsmainsec1 = () => {
    return (
        <section className="sec1_projects-section">
            {/* Overlay for dark effect */}
            <div className="sec1_projects-overlay"></div>

            <div className="sec1_projects-container">
                {/* Left side Projects text */}
                <h2 className="sec1_projects-title">Projects</h2>

                {/* 
                <nav className="sec1_projects-breadcrumb">
                    <a href="#" className="sec1_projects-breadcrumb-link">Home</a>
                    <span className="sec1_projects-breadcrumb-separator">/</span>
                    <span className="sec1_projects-breadcrumb-current">Projects</span>
                </nav>
                */}
            </div>
        </section>
    );
};

export default Projectsmainsec1;