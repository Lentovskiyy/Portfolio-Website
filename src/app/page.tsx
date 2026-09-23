import HeroSection from "@/src/components/layouts/HeroSection/HeroSection";
import HardSkillCard from "@/src/components/ui/HardSkillCard/HardSkillCard";
import SoftSkillCard from "@/src/components/ui/SoftSkillCard/SoftSkillCard";
import HardSkillsHeader from "@/src/components/ui/HardSkillsHeader/HardSkillsHeader";
import SoftSkillHeader from "@/src/components/ui/SoftSkillHeader/SoftSkillHeader";
import Footer from "@/src/components/layouts/Footer/Footer";

import {softSkills} from "@/src/constants/softSkillsContent";
import {hardSkills} from "@/src/constants/hardSkillsContent";
import Header from "@/src/components/layouts/Header/Header";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen items-center bg-[#140f1d] text-purple-100/90 selection:bg-purple-800/50 selection:text-purple-100 relative overflow-hidden font-sans">
      <Header/>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-violet-800/15 rounded-full blur-[120px] pointer-events-none" />

      <main className="flex flex-col justify-center items-center my-10 z-10 px-4 md:px-6 py-12 md:py-16">
        <HeroSection/>

        <section id="skills" className="w-full max-w-6xl md:px-6 pt-10 pb-4 z-10 space-y-30 md:space-y-40 border-t border-purple-500/10 ">
          <div className="space-y-10">
            <HardSkillsHeader/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {hardSkills.map((group) => (
                <HardSkillCard
                  key={group.category}
                  category={group.category}
                  items={group.items}
                />
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <SoftSkillHeader/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((trait) => (
                <SoftSkillCard
                  key={trait}
                  trait={trait}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}