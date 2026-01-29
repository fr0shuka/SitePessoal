import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAVEGAÇÃO SIMPLES */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-bold tracking-tighter text-xl">Miguel Borges</span>
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/comunidade" className="bg-black text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">Comunidade</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-10 px-1 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-16">
            Estratégia que <br />
            <span className="text-[50%] text-gray-400 italic font-serif ">gera melhor gestão pessoal e profissional.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Formador, Empreendedor e Consultor. <br /> Ajudo pessoas a gerir melhor a seu dia-a-dia e equipas através de métodos validados.</p>
          
          <button className="bg-[#008efa] text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:bg-blue-700 transition transform hover:scale-105">
            Marcar uma reunião
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

       <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#008efa] font-bold tracking-widest text-xs uppercase">Comunidade</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Vozes de quem <br/> <span className="italic font-serif text-gray-400">já cresceu connosco.</span></h2>
            </div>
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