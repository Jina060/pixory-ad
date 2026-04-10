'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(88);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        setNavbarHeight(navRef.current.offsetHeight);
      }
    };
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="w-full bg-[#020617] px-6 py-4 fixed top-0 left-0 right-0 z-50"
      style={{ boxShadow: '0 4px 4px 0 rgba(22, 37, 76, 0.38)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo-dark.png"
            alt="Pixory"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Desktop Contact Button */}
        <a href="https://calendly.com/pixoryflow-info/30min" className="hidden lg:block">
          <button className="bg-[#FE5A7A] hover:bg-[#fe4a6a] text-white font-sans text-sm font-medium px-8 py-3 rounded-full transition-colors uppercase tracking-wide cursor-pointer">
            CONTACT US
          </button>
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: `${navbarHeight}px` }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed right-0 w-80 max-w-[85vw] bg-[#020617] border-l border-gray-800 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: `${navbarHeight}px`, height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <div className="flex flex-col p-6 h-full">
          <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full bg-[#FE5A7A] hover:bg-[#fe4a6a] text-white font-sans text-sm font-medium px-8 py-3 rounded-full transition-colors uppercase tracking-wide">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}