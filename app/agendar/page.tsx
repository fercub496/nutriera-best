'use client';

import { InlineWidget } from 'react-calendly';

export default function BookPage() {
  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-xl">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Agenta tu cita</h1>
        
        <div className="mt-8">
          <InlineWidget 
            url="https://calendly.com/nutrier4peru/30min" 
            styles={{ height: '700px' }} 
          />
        </div>
      </div>
    </section>
  );
}



// 'use client';

// import { useState } from 'react';

// export default function BookPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     date: '',
//     time: '',
//     message: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData); // Future: Send to API/email
//     setSubmitted(true);
//   };

//   return (
//     <section className="min-h-screen bg-gray-100 py-20 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-8 shadow-xl rounded-xl">
//         <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Agenda tu cita</h1>

//         {submitted ? (
//           <div className="text-center text-green-700 font-semibold">
//             Gracias! Tu solicitud ha sido recibida, recibirás la confirmación por correo y al teléfono.
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-semibold">Nombre completo</label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 className="w-full mt-1 p-2 border rounded-md"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold">Correo electrónico</label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className="w-full mt-1 p-2 border rounded-md"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <label htmlFor="date" className="block text-sm font-semibold">Fecha preferida</label>
//                 <input
//                   type="date"
//                   name="date"
//                   required
//                   className="w-full mt-1 p-2 border rounded-md"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex-1">
//                 <label htmlFor="time" className="block text-sm font-semibold">Hora</label>
//                 <input
//                   type="time"
//                   name="time"
//                   required
//                   className="w-full mt-1 p-2 border rounded-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-semibold">Notas adicionales:</label>
//               <textarea
//                 name="message"
//                 rows={4}
//                 className="w-full mt-1 p-2 border rounded-md"
//                 placeholder="Puedes comentar cuales son tus comidas preferidas y ejercicio preferido, etc."
//                 onChange={handleChange}
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 font-bold"
//             >
//               Confirmar solicitud
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }