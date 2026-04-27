import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { QRExchange } from "../components/QRExchange";
import { Waitlist } from "../components/Waitlist";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../theme/ThemeContext";

export function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-brand/30 selection:text-brand-dark">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <QRExchange />
          <FAQ />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
