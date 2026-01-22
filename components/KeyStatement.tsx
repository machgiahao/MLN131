interface KeyStatementProps {
  children: React.ReactNode;
}

export default function KeyStatement({ children }: KeyStatementProps) {
  return (
    <div className="my-10 p-8 bg-gradient-to-r from-vn-red/5 to-vn-bronze/5 border-l-4 border-vn-red rounded-r-lg">
      <p className="text-2xl md:text-3xl  leading-relaxed text-vn-dark">
        {children}
      </p>
    </div>
  );
}
