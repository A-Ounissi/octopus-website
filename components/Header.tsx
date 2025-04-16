"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 py-2 rounded-full border border-neutral-800 bg-black/70 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/octo-nobk.png"
            alt="Octopus Logo"
            width={200}
            height={55.6}
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-base text-white hover:text-neutral-300 transition">About Us</Link>
          <Link href="#results" className="text-base text-white hover:text-neutral-300 transition">Results</Link>
          <Link href="#services-section" className="text-base text-white hover:text-neutral-300 transition">Services</Link>
          <Link href="#process" className="text-base text-white hover:text-neutral-300 transition">Process</Link>
        </nav>

        {/* CTA Button */}
        <Link href="#contact">
          <Button className="bg-red-500 hover:bg-red-600 transition text-white text-base px-5 py-2 rounded-full">
            Book a call
          </Button>
        </Link>
      </div>
    </header>
  );
}
