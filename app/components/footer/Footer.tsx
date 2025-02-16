"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import NavLink from "../navLink/NavLink";
import { navbarLinks } from "../navbar/Navbar";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Social Links */}
        <div className="footer-social-links">
          <a
            href="https://github.com/Awaisch-56?tab=repositories"
            target="_blank"
            rel="nooper noreferrer"
            className="social-icon github"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:awaisakhtar395@gmail.com"
            className="social-icon email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/awaisch.56/"
            target="_blank"
            rel="nooper noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/awais-akhtar-821350145/"
            target="_blank"
            rel="nooper noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <ul className="footer-nav-links">
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} isFooter={true} />
              </li>
            ))}
          </ul>
        </div>

        {/* Rights Reserved */}
        <p className="footer-rights">
          {" "}
          &copy; {new Date().getFullYear()} Awais Akhtar | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
