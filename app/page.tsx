import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import Scene from "@/components/scene"; // Import your Scene component

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Scene /> {/* Add the Scene component at the top */}
      <main className="relative flex flex-col items-center justify-between px-4 p-2 z-20">
        <Intro />
        <SectionDivider />
        <About />
        <ExperienceSection />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}