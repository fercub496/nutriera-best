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
        <h2 className="text-3xl font-bold text-green-700 mb-4">Nutrition Articles</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Top 5 Healthy Breakfast Ideas</h3>
            <p className="text-gray-600 mt-2">Discover nutritious and quick breakfasts to start your day right...</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Understanding Calories: What You Should Know</h3>
            <p className="text-gray-600 mt-2">Calories are not your enemy — learn how to balance them wisely...</p>
          </div>
        </div>
      </section>

      {/* 🧩 Tools & Hints Section */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Weight Loss Tools & Tips</h2>
        <ul className="space-y-3">
          <li className="bg-white p-4 rounded-lg shadow">
            <strong>Portion Size Estimator</strong> – Use this tool to gauge how much you should eat.
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <strong>Water Intake Calculator</strong> – Find out how much water your body needs daily.
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <strong>Meal Prep Scheduler</strong> – Plan meals ahead for better discipline.
          </li>
        </ul>
      </section>

      {/* 🍲 Recipes Section */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Healthy Recipes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Quinoa Veggie Bowl</h3>
            <p className="text-gray-600">Protein-packed and full of flavor — perfect for lunch.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Grilled Chicken Wrap</h3>
            <p className="text-gray-600">Low-carb and satisfying — a great post-workout meal.</p>
          </div>
        </div>
      </section>

      {/* 🏃‍♂️ Sports & Physical Activities */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Fitness Activities for Health</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Walking (30 minutes daily)</li>
          <li>Swimming</li>
          <li>HIIT Workouts</li>
          <li>Yoga & Stretching</li>
          <li>Strength Training</li>
          <li>Cycling</li>
          <li>Dancing/Zumba</li>
        </ul>
      </section>
    </main>
  );
}