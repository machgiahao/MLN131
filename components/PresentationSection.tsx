interface PresentationSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function PresentationSection({
  title,
  children,
  className = ''
}: PresentationSectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl  font-bold text-vn-red mb-8 pb-3 border-b-2 border-vn-bronze/30">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
