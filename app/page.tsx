import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 p-2">
        <Intro />
        <SectionDivider />
        <About />
        <ExperienceSection />
        <Skills />
        <Footer />
    </main>
  );
}
