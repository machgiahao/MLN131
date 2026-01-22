interface QuoteBoxProps {
  text: string;
  author?: string;
}

export default function QuoteBox({ text, author }: QuoteBoxProps) {
  return (
    <div className="my-12 p-8 bg-white border-2 border-vn-bronze/30 rounded-lg shadow-sm">
      <blockquote className="text-xl md:text-2xl  italic text-center text-vn-dark leading-relaxed">
        "{text}"
      </blockquote>
      {author && (
        <p className="text-right mt-4 text-vn-gray font-medium">
          — {author}
        </p>
      )}
    </div>
  );
}
