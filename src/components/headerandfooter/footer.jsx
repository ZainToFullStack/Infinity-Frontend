import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "../styles/headerandfooter/footer.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo_assets/loading_logo.gif";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Title */}
        <div className="footer-title">
          <span className="line"></span>
          <h2>Get in Touch</h2>
          <span className="line"></span>
        </div>

        {/* Subtitle */}
        <p className="footer-subtitle">
          Reach out to us for expert construction, consultancy, coworking, and IT solutions.
          We are here to guide you every step of the way.
        </p>

        {/* Info Sections */}
        <div className="footer-grid">
          {/* Location */}
          <div className="footer-item">
            <div className="icon"><FaMapMarkerAlt /></div>
            <span className="divider"></span>
            <h3>Our Location</h3>
            <p>
              InfinityCorps, Sector XX
              <br />
              DHA Phase 3, Lahore
            </p>
          </div>

          {/* Email */}
          <div className="footer-item">
            <div className="icon"><FaEnvelope /></div>
            <span className="divider"></span>
            <h3>Email Enquiries</h3>
            <p>
              <a href="mailto:InfinityCorps@gmail.com">Infinitycorps@gmail.com</a>
            </p>
          </div>

          {/* Phone */}
          <div className="footer-item">
            <div className="icon"><FaPhoneAlt /></div>
            <span className="divider"></span>
            <h3>Phone Contact</h3>
            <p>
              +92 333 639 7213
              <br />
              +92 329 418 0087
            </p>
          </div>
        </div>
      </div>

      {/* Social & Logo */}
      <div className="footer_secondlastcontainer">
        <div className="upper">
          <img className="img" src={logo} alt="InfinityCorps Logo" />
          <h3>InfinityCorps</h3>
        </div>
        <div className="lower">
          <div className="footericons">
            <a href="https://www.facebook.com/"><FaFacebook /></a>
            <a href="https://x.com/"><FaSquareXTwitter /></a>
            <a href="https://www.pinterest.com/"><FaPinterest /></a>
            <a href="https://www.linkedin.com/company/prime-assessment-services-solutions/"><FaLinkedin /></a>
            <a href="https://instagram.com/"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer_thirstlastcontainer">
        <span>Copyright © 2026</span>
        <span>All Rights Reserved By</span>
        <Link to="/" className="bold">InfinityCorps</Link>
      </div>
    </footer>
  );
}

export default Footer;
