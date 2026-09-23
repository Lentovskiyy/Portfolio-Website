"use client"

import Link from "next/link";
import {socialLinks} from "@/src/constants/socialLinksContent";
import SocialLink from "@/src/components/ui/SocialLink/SocialLink";
import ContactHeading from "@/src/components/ui/ContactHeading/ContactHeading";
import {personalName} from "@/src/constants/general";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#0d0a14] border-t border-purple-500/10 text-purple-100/90 px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      <div className="absolute  left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 z-10 relative">
        <ContactHeading/>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-4">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.href}
                link={link}
              />
            ))}
          </div>

          <div className="flex justify-start gap-3 md:gap-4 items-center">
            <Link
              href="/privacy"
              className="text-purple-200/60 hover:text-purple-200 tracking-wide font-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-purple-200/60 hover:text-purple-200 tracking-wide font-light"
            >
              Homepage
            </Link>
          </div>

          <p className="text-sm text-purple-200/40 font-light text-center">
            © {new Date().getFullYear()} {personalName} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}