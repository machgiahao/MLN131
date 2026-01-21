interface QuoteBlockProps {
  text: string;
}

export default function QuoteBlock({ text }: QuoteBlockProps) {
  return (
    <div className="my-12 py-8 border-l-4 border-warm-yellow bg-deep-red/30">
      <blockquote className="text-2xl md:text-3xl font-serif italic text-center px-8 text-warm-yellow leading-relaxed">
        "{text}"
      </blockquote>
    </div>
  );
}
