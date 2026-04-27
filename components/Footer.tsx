import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* CTA Section */}
      <section className="relative w-full min-h-0 md:min-h-103.75 bg-linear-to-r from-black to-[#1B1B1B] px-4 sm:px-8 md:px-12 lg:px-17 pt-12 pb-8 md:py-17 overflow-hidden">
        {/* Decorative Circles - Top Left - Hidden on mobile */}
        <div
          className="hidden md:block absolute left-17 top-[74.15px] w-[48.63px] h-[48.63px] border-[3.65px] border-white rounded-full"
          style={{ transform: "rotate(-27.37deg)" }}
        ></div>
        <div
          className="hidden md:block absolute left-[91.05px] top-[89.59px] w-[48.63px] h-[48.63px] border-[1.22px] border-white rounded-full"
          style={{ transform: "rotate(-27.37deg)" }}
        ></div>

        {/* Content */}
        <div className="max-w-167 mx-auto flex flex-col items-center gap-5 md:gap-8.5">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-[40px] leading-[133%] text-center w-full px-4 md:whitespace-nowrap">
              Ready to Bring Your Vision to life?
            </h2>
            <p className="text-white text-base md:text-lg leading-[160%] text-center max-w-100 px-4">
              Partner with Pixory Flow to design, build and launch your next
              digital product.
            </p>
          </div>

          {/* CTA Button Container - Relative for sparkle positioning */}
          <div className="relative">
            {/* Decorative Sparkle - Top Right of Button - Hidden on mobile */}
            <div className="hidden md:block absolute -top-5 right-8 opacity-50">
              <div
                className="absolute w-[22.09px] h-[3.68px] bg-white rounded-[10px]"
                style={{
                  transform: "rotate(72.18deg)",
                  left: "7.42px",
                  top: "8.07px",
                }}
              ></div>
              <div
                className="absolute w-[22.09px] h-[3.68px] bg-white rounded-[10px]"
                style={{
                  transform: "rotate(-12.18deg)",
                  left: "47.91px",
                  top: "41.89px",
                }}
              ></div>
              <div
                className="absolute w-5.75 h-0.75 bg-white rounded-[10px]"
                style={{
                  transform: "rotate(120deg)",
                  left: "32.4px",
                  top: "18px",
                }}
              ></div>
            </div>

            {/* CTA Button */}
            <a
              href="https://calendly.com/pixoryflow-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FE5A7A] text-white px-6 py-3 rounded-full text-base md:text-lg leading-[160%] hover:opacity-90 transition-opacity w-50 h-13.25 mt-4"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full min-h-64 bg-[#2201DC] relative">
        <div
          className="px-6 sm:px-8 md:px-14 py-8 md:py-14 flex flex-col gap-6 md:gap-8"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #2201DC",
            border: "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          {/* Top Row - Logo and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* Logo */}
            <div className="w-28.75 h-10.75 flex items-center">
              <Image
                src="/logo-dark.png"
                alt="Pixory Flow Logo"
                width={100}
                height={50}
                loading="eager"
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Copyright */}
            <p className="text-white text-sm md:text-lg leading-7 text-center">
              © 2025 Pixory. All rights reserved.
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-white"></div>

          {/* Bottom Row - Contact and Social */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <span className="text-white text-sm md:text-lg leading-7 break-all">
                Contact:{" "}
                <a
                  href="mailto:info@pixoryflow.agency"
                  className="hover:underline"
                >
                  info@pixoryflow.agency
                </a>
              </span>
              {/* <span className="text-white text-sm md:text-lg leading-7">
              12345678910
            </span> */}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href=" https://www.instagram.com/pixoryflow?igsh=MW9rbDhqNG11bGFpNA=="
                className="text-white hover:opacity-80 transition-opacity"
              >
                <FaInstagram size={25} />
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none">
                  <path
                    d="M16.5 0H12.5V17C12.5 18.933 10.933 20.5 9 20.5C7.067 20.5 5.5 18.933 5.5 17C5.5 15.117 7.017 13.583 8.9 13.5V9.467C4.817 9.567 1.5 12.95 1.5 17C1.5 21.1 4.9 24.5 9 24.5C13.1 24.5 16.5 21.1 16.5 17V8.333C18.083 9.5 20.017 10.167 22 10.167V6.167C18.817 6.167 16.5 3.733 16.5 0Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <FaFacebook size={25} />
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/pixoryflow?s=21"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
