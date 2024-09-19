'use client';
import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <a href="/" className="flex items-center">
            <span>Car dealer App</span>
          </a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700">
          <a href="/" className="block px-4 py-2 text-white hover:bg-blue-800">
            Home
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-white hover:bg-blue-800"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
