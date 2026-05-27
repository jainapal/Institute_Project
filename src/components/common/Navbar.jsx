"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { HiMenuAlt3, HiX } from "react-icons/hi";

import Button from "./Button";

import EnquiryModal from "@/components/forms/EnquiryModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#" },
    { name: "Results", path: "#results" },
    { name: "Courses", path: "#courses" },
    /* { name: "Faculty", path: "#faculty" }, */
    { name: "Testimonials", path: "#testimonials" },
    { name: "About Us", path: "#about" },
  ];

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/90 bg-[var(--surface)] border-b border-[var(--border)] shadow-sm">
      
      {/* NAVBAR */}
      <div className="container-custom h-24 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="JEEvant Classes"
            width={55}
            height={55}
            className="object-contain rounded-full w-auto h-auto"
          />

          <div>
            <h1 className="font-semibold text-2xl tracking-tight text-[var(--primary)]">
              JEEvant Classes
            </h1>

            <p className="text-xs tracking-wide uppercase text-[var(--text-secondary)] hidden sm:block">
              Shape Your Future
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="relative text-[15px] font-medium text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--accent)]
        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative text-[15px] font-medium text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--accent)]
        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full">
      
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* DESKTOP BUTTON */}
          <div className="hidden md:block">
            <Button onClick={() => setModalOpen(true)}>
              Enquiry
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              text-[var(--primary)]
              hover:text-[var(--accent)]
              transition-colors
            "
          >
            {menuOpen ? (
              <HiX size={30} />
            ) : (
              <HiMenuAlt3 size={30} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          bg-[var(--surface)]
          border-t border-[var(--border)]
          ${
            menuOpen
              ? "max-h-screen opacity-100 py-6"
              : "max-h-0 opacity-0 py-0"
          }
        `}
      >
        <div className="container-custom flex flex-col gap-5">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className="
                text-[var(--text-primary)]
                font-medium
                hover:text-[var(--accent)]
                transition-colors
                duration-300
                py-3
                border-b border-[var(--border)]
              "
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE CTA */}
          <Button className="w-full mt-3" 
          onClick={() => {
            setModalOpen(true);
              setMenuOpen(false);
          }}
          >
            Enquiry
          </Button>
        </div>
      </div>
    </header>
    {/* MODAL */}
     <EnquiryModal
     isOpen={modalOpen}
     onClose={() => setModalOpen(false)}
     ></EnquiryModal>
    </>
  );
}