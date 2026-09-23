"use client"
import {useState} from "react";
import {personalEmail} from "@/src/constants/general";

export default function ContactHeading() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col xl:flex-row justify-between items-center gap-8 pb-12 border-b border-purple-500/10">
      <div className="space-y-3 max-w-xl">
        <h2 className="text-center text-3xl md:text-4xl font-light text-purple-50 tracking-tight">
          Let’s build something <span className="text-3xl md:text-4xl font-serif italic text-purple-300">Extraordinary</span>.
        </h2>
        <p className="text-center text-purple-200/60 font-light">
          Have a project in mind or looking for a skilled developer? Reach out and let’s discuss how I can help.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch justify-center sm:items-center gap-3 w-full md:w-auto">
        <a
          href={`mailto:${personalEmail}`}
          className="px-6 py-3.5 rounded-lg font-medium text-purple-50 bg-gradient-to-r from-purple-900/90 to-violet-900/90 hover:from-purple-800 hover:to-violet-800 border border-purple-400/30 shadow-md shadow-purple-950/50 text-center tracking-wide"
        >
          Send Email
        </a>
        <button
          onClick={handleCopyEmail}
          className="px-5 py-3.5 rounded-lg font-mono text-purple-200/80 bg-[#1c1528]/60 hover:bg-[#231a33] border border-purple-500/20 text-center backdrop-blur-md"
        >
          {copied ? "✓ Copied to clipboard" : personalEmail}
        </button>
      </div>
    </div>
  )
}