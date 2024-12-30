import Link from "next/link";
import React from "react";

const Header = () => {
  const navLinks = [
    {
      href: "/cart",
      label: "Cart",
    },
    {
      href: "/signin",
      label: "Sign in",
    },
  ];
  return (
    <header>
      <nav className="navbar justify-between bg-base-300">
        <Link href="/" className="btn btn-ghost text-lg">
          Next Amazino
        </Link>
        <ul className="flex">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <Link
                className="btn btn-ghost rounded-btn"
                href={navLink.href}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
