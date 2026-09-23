import {personalName} from "@/src/constants/general";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div id="about" className="flex flex-col justify-center items-center max-w-4xl text-center space-y-8 mb-32 md:mb-60">

      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1e172a]/80 border border-purple-500/20 text-purple-200/80 font-medium tracking-wide backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/90"></span>
            </span>
        Available for select projects
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.2] text-purple-100/90">
        Hello, I’m <span className="text-3xl md:text-4xl lg:text-5xl font-serif italic bg-gradient-to-r from-purple-200 via-violet-300 to-indigo-200 bg-clip-text text-transparent">{personalName}</span>.
        <br />
        <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-purple-50/95">
          I craft refined websites that grow your business.
        </span>
      </h1>

      <p className="max-w-2xl text-purple-200/65 font-light leading-relaxed tracking-normal">
        Specializing in clean architecture, mobile optimization, and seamless digital experiences tailored to convert visitors into loyal clients.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-purple-50 bg-gradient-to-r from-purple-900/90 to-violet-900/90 hover:from-purple-800 hover:to-violet-800 border border-purple-400/30 shadow-md shadow-purple-950/50  text-center tracking-wide"
        >
          Get in Touch
        </a>

        <a
          href="#skills"
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-purple-200/80 bg-[#1c1528]/60 hover:bg-[#231a33] border border-purple-500/20 hover:border-purple-400/40 backdrop-blur-md hover:text-purple-100 text-center tracking-wide"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}