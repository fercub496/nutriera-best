'use client';
export default function AboutPage() {
  return (
     <section className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
       <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Acerca de Nosotros</h1>
        <div className="space-y-8 leading-relaxed">
            <p>En The Nutrition Era, confiamos en que no debes estar en soledad al querer mejorar tu vida. Por eso nos proponemos como tu mejor opción para mejorar tu salud a partir de tu alimento, el ejercicio y hábitos saludables.</p>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">1. Información que recopilamos</h2>
        <p>Cuando visitas nuestro sitio web, podemos recopilar automáticamente:</p>
        <ul className="list-disc list-inside space-y-2">
            <li>Tu dirección IP</li>
        <li>Tipo de navegador</li>
        <li>Páginas visitadas y tiempo en el sitio</li>
        <li>Datos recolectados por cookies o tecnologías similares</li>
        </ul>
        <p>No recopilamos datos personales directamente a menos que tú los proporciones voluntariamente (por ejemplo, al suscribirte al boletín).</p>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">2. Cookies y tecnologías similares</h2>
        <p>Utilizamos cookies para mejorar tu experiencia de navegación y para mostrar anuncios relevantes a través de Google AdSense.</p>
        <p>Puedes desactivar las cookies desde la configuración de tu navegador.</p>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">3. Publicidad mediante Google AdSense</h2>
        <p>Este sitio utiliza Google AdSense. Google puede utilizar cookies y tecnologías similares para personalizar los anuncios que ves según tus visitas previas a este y otros sitios web.</p>
        <p>Puedes conocer más sobre cómo Google gestiona los datos aquí:
</p><a href="https://policies.google.com/technologies/ads?hl=es" className="text-green-700 underline hover:text-green-900" target="_blank" rel="noopener noreferrer">Política de Google</a>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">4. Enlaces a terceros</h2>
        <p>Nuestro sitio puede contener enlaces a otras webs. No nos hacemos responsables de las prácticas de privacidad de esos sitios.</p>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">5. Derechos del usuario</h2>
        <p>Tienes derecho a:</p>
        <ul className="list-disc list-inside space-y-2">
            <li>Acceder a tus datos personales</li>
            <li>Solicitar corrección o eliminación</li>
            <li>Retirar tu consentimiento</li>
        </ul>
        <p>Para cualquier consulta, contáctanos en {''}
            <a href="nutrier4peru@outlook.com"  className="text-green-700 underline hover:text-green-900">nutrier4peru@outlook.com</a>.  </p>

      </div>
    </section>
  );
}