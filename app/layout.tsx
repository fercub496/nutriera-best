import './globals.css';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export const metadata = {
  title: 'Ideal Nutrition Clone',
  description: 'Healthy Meal Plans for Australia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
