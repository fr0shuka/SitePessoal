import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAVEGAÇÃO SIMPLES */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-bold tracking-tighter text-xl">TEU NOME.</span>
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/comunidade" className="bg-black text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">Comunidade</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Estratégia que <br />
            <span className="text-gray-400 italic font-serif">gera resultados.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Formador, Empreendedor e Consultor. Ajudo líderes a escalar negócios e equipas através de métodos validados.
          </p>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:bg-blue-700 transition transform hover:scale-105">
            Quero ser mentorado
          </button>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-1">
          <ServiceCard title="Formador" desc="Capacitação estratégica." />
          <ServiceCard title="Empreendedor" desc="Criação de ecossistemas." />
          <ServiceCard title="Gestor" desc="Otimização de processos." />
          <ServiceCard title="Consultor" desc="Estratégia de alto nível." />
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-10 border border-gray-100 hover:z-10 hover:shadow-2xl hover:border-blue-500 transition-all">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}