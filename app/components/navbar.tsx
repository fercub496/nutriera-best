'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">The Nutrition Era</Link>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-green-700">
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><Link href="/acerca" className="hover:text-green-700">Nosotros</Link></li>
          <li><Link href="/agendar" className="hover:text-green-700">Agendar cita</Link></li>
          <li><Link href="/plans" className="hover:text-green-700">Herramientas</Link></li>
          <li><Link href="/contacto" className="hover:text-green-700">Contáctanos</Link></li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-2">
          <li><Link href="/acerca" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
          <li><Link href="/agendar" onClick={() => setIsOpen(false)}>Agendar cita</Link></li>
          <li><Link href="/plans" onClick={() => setIsOpen(false)}>Herramientas</Link></li>
          <li><Link href="/contacto" onClick={() => setIsOpen(false)}>Contáctanos</Link></li>
        </ul>
      )}
    </header>
  );
}