import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 p-24">
        <Intro />
        <SectionDivider />
    </main>
  );
}
