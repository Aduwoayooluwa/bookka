"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <nav className="bg-white container mx-auto">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link href="/">
                <span className="flex items-center py-4 px-2 cursor-pointer font-semibold text-black text-lg">Bookka</span>
              </Link>
            </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-1">
                    <Link href="/about"><span className="py-4 px-2 text-blue-500 font-semibold cursor-pointer">About</span></Link>
                    <Link href="/services"><span className="py-4 px-2 text-blue-500 font-semibold cursor-pointer">Services</span></Link>
                    <Link href="/contact"><span className="py-4 px-2 text-blue-500 font-semibold cursor-pointer">Contact</span></Link>
                    </div>
                    <button className="rounded-full bg-blue-500 text-white py-2 px-4  hover:bg-blue-600">
                        <Link href="/auth">Get Started</Link>
                    </button>
                  </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute w-4/5 bg-white shadow-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <ul className="">
              <li className="border-b border-gray-200"><Link href="/about"><span className="block text-sm px-2 py-4 text-gray-700 hover:bg-blue-500 hover:text-white">About</span></Link></li>
              <li className="border-b border-gray-200"><Link href="/services"><span className="block text-sm px-2 py-4 text-gray-700 hover:bg-blue-500 hover:text-white">Services</span></Link></li>
              <li className="border-b border-gray-200"><Link href="/contact"><span className="block text-sm px-2 py-4 text-gray-700 hover:bg-blue-500 hover:text-white">Contact</span></Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
