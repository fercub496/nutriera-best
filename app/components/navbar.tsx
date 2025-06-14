"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-green-700">
          IdealNutrition
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="/about" className="hover:text-green-700">About</Link>
          <Link href="/plans" className="hover:text-green-700">Meal Plans</Link>
          <Link href="/contact" className="hover:text-green-700">Contact</Link>
        </div>
      </nav>
    </header>
  );
}