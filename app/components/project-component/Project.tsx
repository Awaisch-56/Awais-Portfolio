"use client";
import React from "react";
import { ProjectCard } from "../project-card/ProjectCard";

const projects = [
  {
    title: "Life Script",
    description:
      "We ask thoughtful questions about their life, compiling their answers into a beautifully crafted keepsake book to be treasured for generations.",
    image: "/images/lifeScript.webp",
    url: "https://www.thelifescript.com",
  },
  {
    title: "Kronocast",
    description:
      "Kronocast is SaaS Enabled Online Marketplace Platform for live events. Empower your creativity and reach from aspiring creators to big enterprises.",
    image: "/images/vedio.png",
    url: "https://dev.kronocast.com",
  },
  {
    title: "JobJelly",
    description: "Track your progress, improve your resume, and see how you match up to your dream job.",
    image: "/images/job.png",
    url: "https://dev.jobjelly.io/landing-page",
  },
  {
    title: "Best Home Maintenance",
    description:
      "Your Trusted Partner for Quality Maintenance Services in Dubai and Abu Dhabi",
    image: "/images/kmat.svg",
    url: "https://kmatechnical.com",
  },
  {
    title: "Spiritual Healer",
    description:
      "Welcome to Your Healing Journey. Experience the uplifting power of Spiritual Healing and restore your balance.",
    image: "/images/logo1.svg",
    url: "https://thespiritualhealers.com",
  },
  {
    title: "Better Mind",
    description:
      "Better Mind helps you track moods and reflect on experiences, supporting your emotional well-being with a trusted AI companion.",
    image: "/images/logo.svg",
    url: "https://better-mind-dashboard.vercel.app",
  },
  {
    title: "The Dev Corporate",
    description:
      "We Engineer Smart Tech Soutions. Global software partner helping businesses create innovative & fundable products.",
    image: "/images/tdc.png",
    url: "https://thedevcorporate.com",
  },
  {
    title: "KFC",
    description:
      "KFC, or Kentucky Fried Chicken, is a fast-food chain that serves fried chicken.",
    image: "/images/kfc.png",
    url: "https://kfc-web.vercel.app",
  },
  {
    title: "proptely",
    description:
      "A property management dashboard for managing tenants, leases, commissions, and documents.",
    image: "/images/proptely1.png",
    url: "https://proptely.vercel.app",
  },
  {
    title: "IGS",
    description:
      "Designed homepage UI for IGS showcasing supply chain and procurement innovation.",
    image: "/images/igs.png",
    url: "https://igs-lemon.vercel.app",
  },
   {
    title: "Movie List",
    description:
      "A web app to showcase, add, and manage your favorite movies with images and details.",
    image: "/images/movie1.jpg",
    url: "https://movie-list-rho-seven.vercel.app",
  },
];

const Project: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">
        My <span className="projects-gradient-text">Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
