import "./globals.css"; // Esta linha liga o Tailwind ao site
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miguel Borges | Mentor & Consultor",
  description: "Formador, Empreendedor e Consultor. Ajudo líderes a escalar negócios e equipas através de métodos validados.",
   icons: {
    icon: "/site.svg", // Caminho para a imagem na pasta /public
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}