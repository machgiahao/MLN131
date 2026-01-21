interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-serif font-bold text-warm-yellow mb-6 border-b-2 border-academic-red pb-3">
        {title}
      </h2>
      <div className="text-white leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}
