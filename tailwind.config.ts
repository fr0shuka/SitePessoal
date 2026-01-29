import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Esta linha é obrigatória
  ],
  theme: {
    extend: {
      colors: {
        brand: "#008efa", // Garante que a cor está definida aqui também
      },
    },
  },
  plugins: [],
};
export default config;