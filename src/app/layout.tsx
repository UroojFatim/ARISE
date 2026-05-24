import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shoply - Next.js Ecommerce UI",
  description: "Static ecommerce UI built with Next.js App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
