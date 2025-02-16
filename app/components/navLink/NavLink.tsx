import Link from "next/link";
import React from "react";
import { NavLinkProps } from "@/type/componentsTypes";

const NavLink: React.FC<NavLinkProps> = ({ href, title, isFooter }) => {
  return (
    <Link
      href={href}
      className={`navbar-link ${isFooter ? "footer-nav-item" : ""}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;