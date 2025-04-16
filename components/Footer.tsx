"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <Image src="/octo-nobk.png" alt="Logo" width={200} height={55.6} />
          <p className="text-gray-400 text-sm max-w-xs">
            We build intelligent systems that scale your business—without scaling headcount.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services-section">Services</Link></li>
            <li><Link href="#solutions-section">Solutions</Link></li>
            <li><Link href="#cta-section">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="#community-cta">Community</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Stay Connected</h4>
          <p className="text-gray-400 text-sm">hello@octopusai.com</p>
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:opacity-80 transition"><Facebook size={20} /></Link>
            <Link href="https://twitter.com" target="_blank" className="hover:opacity-80 transition"><Twitter size={20} /></Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:opacity-80 transition"><Linkedin size={20} /></Link>
            <Link href="https://youtube.com" target="_blank" className="hover:opacity-80 transition"><Youtube size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Octopus AI. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
