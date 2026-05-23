import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { QRExchange } from "../components/QRExchange";
import { SocialNetworks } from "../components/SocialNetworks";
import { Waitlist } from "../components/Waitlist";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../theme/ThemeContext";

export function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-brand/30 selection:text-brand-dark">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <main>
          <Hero />
          <Features />
          <QRExchange />
          <FAQ />
          <SocialNetworks />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
