import {ISocialLink} from "@/src/types/socialLinkTypes";
import Link from "next/link";

interface  IProps {
  link: ISocialLink,
}

export default function SocialLink({link}: IProps) {
  return (
    <Link
      key={link.href}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-200/60 hover:text-purple-200  tracking-wide font-light"
    >
      {link.label} ↗
    </Link>
  )
}