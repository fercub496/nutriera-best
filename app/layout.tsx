import './globals.css';
import type { Metadata } from "next";
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import CookieBanner from './components/cookieBanner';


export const metadata: Metadata = {
  title: 'The Nutrition Era',
  description: 'Healthy Meal Plans for Peru',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <CookieBanner/>
        <Footer />
      </body>  
    </html> 
  );
}
