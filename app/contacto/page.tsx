'use client';
export default function ContactPage() {
  return (
     <section className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
       <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Contacto</h1>
        <div className="space-y-8 leading-relaxed">
            <p>En The Nutrition Era queremos conocer tu caso para ayudarte mejor.</p>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">Número de teléfono y WhatsApp</h2>
        <p>997 195 391</p>
        <p>WhatsApp:
</p><a href="https://wa.me/51997195391/?text=Hola%20deseo%20conocer%20m%C3%A1s%20sobre%20planes%20nutricionales" className="text-green-700 underline hover:text-green-900" target="_blank" rel="noopener noreferrer">Enviar mensaje</a>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">Facebook</h2>
        <p>The Nutrition Era</p>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">Instagram</h2>
        <p>@nutrimara_era</p>
        <p>Para cualquier consulta, contáctanos en {''}
            <a href="nutrier4peru@outlook.com"  className="text-green-700 underline hover:text-green-900">nutrier4peru@outlook.com</a>.  </p>
      </div>
    </section>
  );
}