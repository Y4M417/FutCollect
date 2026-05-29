import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { QRExchange } from "../components/QRExchange";
import { SocialNetworks } from "../components/SocialNetworks";
import { Waitlist } from "../components/Waitlist";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../theme/ThemeContext";


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 100,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        background: "var(--color-brand)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-dark)")}
      onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand)")}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}

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
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
}
