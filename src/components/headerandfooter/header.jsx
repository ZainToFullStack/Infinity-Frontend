import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaFacebookF,
    FaPinterestP,
    FaLinkedinIn,
    FaInstagram,
    FaBars,
    FaChevronDown
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/headerandfooter/header.css";
import logo from "../../assets/logo_assets/loading_logo.gif";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const projectsData = [
        {
            id: 1,
            title: "Engineering Consultancy",
            slug: "https://primeconsultant.org/",
        },
        {
            id: 2,
            title: "Cozones Coworking Space",
            slug: "https://www.co-zones.site/",
        },
        {
            id: 3,
            title: "Construction Materials Hub",
            slug: "https://www.casaforteglobal.com/",
        },
        {
            id: 4,
            title: "Building Inspection Consultants",
            slug: "https://prime-assessment.com/",
        },
        {
            id: 5,
            title: "GHB",
            slug: "#",
        },
    ];

    return (
        <header className="header">
            {/* Top Info Bar */}
            <div className="header-top">
                <div className="header-contact">
                    <span> 333 639 7213</span>
                    <span className="divider" />
                    <span>Infinitycorps@gmail.com</span>
                </div>

                <div className="header-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>

            {/* Navigation */}
            <nav className="header-nav">
                <NavLink to="/" onClick={handleLinkClick}>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <b>InfinityCorps</b>
                    </div>
                </NavLink>

                <ul className={`menu ${menuOpen ? "open" : ""}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLinkClick}>
                            HOME
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLinkClick}>
                            ABOUT
                        </NavLink>
                    </li>

                    {/* ✅ IMPROVED DROPDOWN */}
                    <li className={`dropdown ${dropdownOpen ? "open" : ""}`}>
                        {/* Clickable title */}
                        <div
                            className="dropdown-title"
                            onClick={() => setDropdownOpen((prev) => !prev)}
                        >
                            PROJECTS <FaChevronDown className={`arrow ${dropdownOpen ? "rotate" : ""}`} />
                        </div>

                        <ul className="dropdown-menu">
                            {projectsData.map((project) => (
                                <li key={project.id}>
                                    <a
                                        href={project.slug}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleLinkClick}
                                    >
                                        {project.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLinkClick}>
                            CONTACT
                        </NavLink>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    className="menu-toggle"
                    aria-label="Toggle Menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <FaBars />
                </button>
            </nav>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="menu-overlay show"
                    onClick={handleLinkClick}
                />
            )}
        </header>
    );
}

export default Header;