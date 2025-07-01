'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import BG from "../assets/Mainbg.svg";

const Footer = () => {
  return (
    <footer className="relative text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient Image */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E7985] to-[#44D9E7] mix-blend-multiply"></div>
        <Image 
          src={BG} 
          alt="Background gradient"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Title */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Trident</h2>
            <p className="mb-4">Advanced data solutions for modern businesses</p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Industries', 'How It Works', 'Contact Us', 'Blog', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-gray-200 transition-colors flex items-center">
                    <span className="mr-2">→</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Bulk Data Scraping',
                'Custom Scraping Software',
                'Web Automation Bots',
                'AI Powered Bots',
                'Daily Data Feeds',
                'API Integration',
                'Server Setup',
                'Dashboard Design'
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:text-gray-200 transition-colors flex items-center">
                    <span className="mr-2">•</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Global Offices</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Texas
                </h4>
                <p className="text-sm flex items-center mt-1">
                  <FaPhone className="mr-2" /> +1 346 458 0154
                </p>
                <p className="text-sm mt-1">31S9 W Holeombe Blvd</p>
                <p className="text-sm">A61 Houston, TX 77025</p>
              </div>
              <div>
                <h4 className="font-medium flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Qatar
                </h4>
                <p className="text-sm flex items-center mt-1">
                  <FaPhone className="mr-2" /> +974 668 47104
                </p>
                <p className="text-sm mt-1">23231 Area-31 St-857 Build.9</p>
                <p className="text-sm">Doña, Qatar 00000</p>
              </div>
              <div>
                <h4 className="font-medium flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Lahore
                </h4>
                <p className="text-sm flex items-center mt-1">
                  <FaPhone className="mr-2" /> +32 334 7728229
                </p>
                <p className="text-sm mt-1">220 CANAL PARK GULBERG II</p>
                <p className="text-sm">Lahore, Pakistan 54000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Subscribe & Get Updates</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button className="bg-white text-[#1AA7AD] px-6 py-2 rounded-r-md font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-white/20 pt-6">
          © {new Date().getFullYear()} Trident. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;