import Hero from '@/app/components/hero';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4">
       <Hero />
      {/* 🔶 Advertisement Area (for AdSense or Ezoic) */}
      <section className="mb-10">
        <div className="w-full max-w-4xl mx-auto h-32 bg-white border border-dashed border-gray-400 flex items-center justify-center">
          <p className="text-gray-500">[Ad Placeholder — Coming Soon]</p>
        </div>
      </section>
     

      {/* 🔷 Articles Section */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Pronto: Artículos de nutrición</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Ideas para desayunos nutritivos</h3>
            <p className="text-gray-600 mt-2">Descubre cuantas cuadras necesitas caminar cada día para bajar de peso</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Comprende la diferencia entre calorías y carbohidratos</h3>
            <p className="text-gray-600 mt-2">La grasa no debe ser tu enemiga: te enseñamos</p>
          </div>
        </div>
      </section>

      {/* 🧩 Tools & Hints Section */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Herramientas digitales para bajar de peso</h2>
        <ul className="space-y-3">
          <li className="bg-white p-4 rounded-lg shadow">
            <strong>Portion Size Estimator</strong> – Pronto
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <strong>Water Intake Calculator</strong> – Pronto
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <strong>Meal Prep Scheduler</strong> – Pronto
          </li>
        </ul>
      </section>

      {/* 🍲 Recipes Section */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Recetas saludables</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Pronto</h3>
            <p className="text-gray-600">Pronto</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Pronto</h3>
            <p className="text-gray-600">Pronto</p>
          </div>
        </div>
      </section>

      {/* 🏃‍♂️ Sports & Physical Activities */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Actividades saludables</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Caminar por 30 minutos</li>
          <li>Nadar</li>
          <li>Crossfit</li>
          <li>Yoga y estiramientos</li>
          <li>Mejorar fuerza</li>
          <li>Ciclismo</li>
          <li>Bailar/Zumba</li>
        </ul>
      </section>
    </main>
  );
}