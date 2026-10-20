interface StackListProps {
  items: string[];
}

const StackList = ({ items }: StackListProps) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          className="border-sign/25 text-muted-foreground border px-2 py-0.5 text-xs font-semibold"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default StackList;
