"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import { FaFingerprint } from "react-icons/fa";
import Container from "../Common/Container";
import Image from "next/image";
import Logo from "../Common/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    // { text: "Features", url: "#features" },
    // { text: "Pricing", url: "/pricing" },
    // { text: "Testimonials", url: "#testimonials" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        showHeader
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <Container className="!px-0">
        <nav className="mx-auto flex items-center justify-between bg-transparent px-5 py-5 shadow-md md:bg-transparent md:py-8 md:shadow-none">
          {/* Logo */}
          <Logo width={55} height={55} />

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 md:flex">
            {/* {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-foreground-accent transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))} */}
            <li>
              <Link
                href="/signin"
                className="bg-primary hover:bg-primary-accent rounded-full px-8 py-3 text-white transition-colors"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="border-primary text-primary hover:bg-primary rounded-full border px-8 py-3 transition-colors hover:text-white"
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      {isOpen && (
        <div id="mobile-menu" className="bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 px-6 pt-1 pb-6">
            {/* {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))} */}
            <li>
              <Link
                href="/signin"
                className="bg-primary hover:bg-primary-accent block w-fit rounded-full px-5 py-2 text-white"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="border-primary text-primary hover:bg-primary block w-fit rounded-full border px-5 py-2 hover:text-white"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
