interface IProps {
  trait: string
}

export default function SoftSkillCard({trait}: IProps) {
  return (
    <div
      className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-[#1a1325]/40 border border-purple-500/10 hover:border-purple-500/20 "
    >
      <span className="text-purple-400 mt-0.5">✦</span>
      <p className=" text-base text-purple-200/75 leading-relaxed font-light">
        {trait}
      </p>
    </div>
  )
}