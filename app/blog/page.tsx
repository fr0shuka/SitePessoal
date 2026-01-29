import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: "Como escalar a sua Consultoria em 2026",
      date: "29 Jan, 2026",
      slug: "escalar-consultoria",
      excerpt: "As estratégias de gestão que estão a mudar o mercado europeu."
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-20">
      <nav className="p-6 max-w-7xl mx-auto">
        <Link href="/" className="text-sm font-bold hover:text-brand">← VOLTAR</Link>
      </nav>

      <section className="max-w-4xl mx-auto px-6 pt-10">
        <h1 className="text-5xl font-bold tracking-tighter mb-16">
          Publicações <span className="text-brand italic font-serif">&</span> Insights
        </h1>

        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
              <h2 className="text-3xl font-bold mt-2 group-hover:text-brand transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-6 w-10 h-1 bg-brand transform origin-left group-hover:scale-x-150 transition-transform"></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}