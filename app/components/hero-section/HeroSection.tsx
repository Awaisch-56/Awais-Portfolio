"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I am </span>
            <br />
            <TypeAnimation
              sequence={[
                "Awais Akhtar",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "React Developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="hero-animation"
            />
          </h1>
          <p className="hero-description">
            I am a Frontend Developer with 1.5 years of experience, specializing
            in React.js, Next.js, React Native, and JavaScript. I have a passion
            to build modern web applications and mobile apps. Skilled in
            Material-UI, Tailwind CSS, and Bootstrap, I create pixel-perfect,
            user-friendly interfaces. With expertise in Redux for state
            management, I ensure seamless data flow and performance
            optimization. Passionate about scalable, high-quality solutions, I
            thrive in collaborative environments, contributing innovative ideas
            to impactful projects.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-contact"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
            </button>
            <button
              className="btn-hire-me"
              onClick={() => (window.location.href = "/contact")}
            >
              <span className="hire-me-span">Hire Me</span>
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <Image
              src="/images/profile1.png"
              alt="Hero Section Image"
              width={350}
              height={350}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
