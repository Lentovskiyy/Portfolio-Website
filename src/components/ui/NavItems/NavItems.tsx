import Link from "next/link";
import {INavItem} from "@/src/types/navItemsTypes";


interface IProps {
  label: INavItem["label"];
  href: INavItem["href"];
}

export default function NavItems({label, href}: IProps) {
  return (
    <a
      href={href}
      className=" text-purple-200/70 hover:text-purple-100 font-light tracking-wide"
    >
      {label}
    </a>
  )
}