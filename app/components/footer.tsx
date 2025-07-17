'use client';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-10">
      <div className="bg-green-700 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">Comer sano. Vida prolongada.</p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} The Nutrition Era. All rights reserved.</p>
          <Link href="/politica-de-privacidad"><p className="mt-2 text-sm">Política de privacidad</p></Link>
        </div>
      </div>
    </footer>
  );
}