interface IProps {
  category: string;
  items: string[];
}

export default function HardSkillCard({ category, items }: IProps) {
  return (
    <div className="p-4 md:p-6 rounded-xl bg-[#1c1528]/50 border border-purple-500/15 backdrop-blur-md hover:border-purple-400/30 space-y-4">
      <h3 className="text-xl sm:text-2xl font-medium text-purple-200/90 border-b border-purple-500/10 pb-2">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span
            key={index}
            className="text-base px-3 py-1 rounded-md bg-purple-950/60 border border-purple-800/30 text-purple-200/80 font-mono"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}