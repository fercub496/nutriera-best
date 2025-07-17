'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center text-white text-center py-32 px-4 rounded-xl overflow-hidden max-w-7xl mx-auto mt-6"
      style={{ backgroundImage: "url('/hero/hero_image.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Nutrición equilibrada siempre contigo
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Planes sencillos. Horario flexible. Nutricionista certificada.
        </p>
        <Link href="/agendar">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold transition-all">
          Agendar cita
        </button>
        </Link>
      </div>
    </section>
  );
}