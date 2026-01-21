interface BulletListProps {
  items: string[];
}

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-4">
          <span className="flex-shrink-0 w-8 h-8 bg-vn-red text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
            {index + 1}
          </span>
          <span className="text-lg md:text-xl text-vn-dark leading-relaxed pt-1">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
