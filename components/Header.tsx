"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#services-section", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <div className="
        inline-flex                 /* shrink‑wrap around content */
        items-center
        space-x-8                   /* increased gap between items */
        px-8 py-4                   /* increased padding */
        bg-black/50
        border border-neutral-700
        rounded-2xl                 /* increased rounded corners */
        backdrop-blur-md
        shadow-lg
      ">
        {/* Logo (bigger) */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/octo-nobk.png"
            alt="Octopus Logo"
            width={216}              /* increased by 20% from 180 */
            height={60}              /* increased by 20% from 50 */
            className="object-contain filter brightness-90"
          />
        </Link>

        {/* Nav (larger text & spacing) */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="
                relative
                text-base font-medium text-white opacity-75
                hover:opacity-100 transition-opacity duration-200
                before:absolute before:bottom-0 before:left-0
                before:h-[2px] before:w-0 before:bg-current
                before:transition-[width] before:duration-200
                hover:before:w-full
              "
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA (bigger button) */}
        <div className="hidden md:block">
          <Link href="https://cal.com/octopus-automations" target="_blank" rel="noopener noreferrer">
            <Button className="
              text-base px-5 py-2
              bg-white hover:bg-white/90
              text-black rounded-full
              transition flex items-center gap-2
            ">
              Book a call
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          {/* …hamburger icon… */}
        </div>
      </div>
    </header>
  );
}
