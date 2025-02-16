"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "../navLink/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "../menuOverlay/MenuOverlay";
import Image from "next/image";


export const navbarLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Skills", path: "/skills" },
  { title: "Projects", path: "/my-projects" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href={"./"} className="navbar-logo">
          <Image
            src="/images/logo.jpg"
            alt="Logo Image"
            width={40}
            height={5}
            className="logo"
          />
        </Link>
        <div className="">
          {!isNavbarOpen ? (
            <button
              onClick={() => setIsNavbarOpen(true)}
              className="navbar-toggle-button"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsNavbarOpen(false)}
              className="navbar-toggle-button"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className={`navbar-links ${isNavbarOpen ? "block" : "hidden"}`}
          id="navbar"
        >
          <ul className="navbar-links-list">
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen ? <MenuOverlay links={navbarLinks} /> : null}
    </nav>
  );
};

export default Navbar;