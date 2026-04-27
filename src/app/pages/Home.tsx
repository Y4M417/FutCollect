import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { NewsBanner } from "../components/NewsBanner";
import { Features } from "../components/Features";
import { Waitlist } from "../components/Waitlist";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <NewsBanner />
        <Features />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
