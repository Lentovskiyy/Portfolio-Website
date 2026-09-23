import {INavItem} from "@/src/types/navItemsTypes";

interface IProps {
  href: INavItem["href"]
  label: INavItem["label"]
  onClick?: () => void;
}

export default function MobileNavLink({href, label, onClick}: IProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm text-purple-200/80 hover:text-purple-50 font-light tracking-wide py-1 border-b border-purple-500/10"
    >
      {label}
    </a>
  )
}