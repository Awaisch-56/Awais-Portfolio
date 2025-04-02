"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Awais_CV.pdf";
    link.download = "Awais_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          I am a passionate Frontend Developer with 2 years of experience in building dynamic, high-performance web and mobile applications. Skilled in React.js, Next.js, React Native, Material-UI (MUI), Tailwind CSS, ShadCN, Redux, Zustand, and TanStack Query, I excel at crafting intuitive, responsive user interfaces while ensuring seamless state management.
          With expertise in Redux, Zustand, and TanStack Query, I focus on developing scalable, maintainable applications that enhance user experience and performance. Committed to writing clean, efficient code, I thrive on transforming innovative ideas into impactful digital solutions. I am eager to contribute to forward-thinking projects that push the boundaries of modern development.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-contact"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
            </button>
            <button className="btn-contact" onClick={handleDownloadCV}>
              <span className="hire-me-span">Download CV</span>
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
