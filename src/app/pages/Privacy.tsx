import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../theme/ThemeContext";

const ES_CONTENT = {
  title: "Política de Privacidad — FutCollect",
  updated: "Última actualización: 1 de mayo de 2025",
  intro:
    "FutCollect es una aplicación móvil para coleccionar y gestionar estampas de fútbol. Nos tomamos tu privacidad en serio.",
  collectTitle: "Datos que recopilamos",
  collect: [
    {
      bold: "Historial de compras:",
      text: "Si adquieres FutCollect Pro, procesamos tu compra a través de RevenueCat. RevenueCat puede recopilar un identificador de usuario anónimo y el historial de compras para validar tu acceso premium. Consulta la política de privacidad de RevenueCat en revenuecat.com/privacy.",
    },
    {
      bold: "Cámara:",
      text: "Solicitamos acceso a la cámara únicamente para escanear códigos QR de otros coleccionistas. No almacenamos ni enviamos imágenes.",
    },
    {
      bold: "Almacenamiento local:",
      text: "Toda la información de tu álbum (estampas, progreso, respaldos) se guarda exclusivamente en tu dispositivo. No subimos tus datos a ningún servidor.",
    },
  ],
  notTitle: "Lo que NO hacemos",
  not: [
    "No mostramos anuncios.",
    "No rastreamos tu actividad con fines publicitarios.",
    "No vendemos ni compartimos tu información con terceros, salvo RevenueCat para procesar compras.",
  ],
  minorsTitle: "Menores de edad",
  minors:
    "FutCollect no está dirigida a menores de 13 años y no recopila conscientemente datos de menores. Recomendamos que niños menores de 4 años utilicen la app bajo supervisión de un adulto.",
  contactTitle: "Contacto",
  contact: "Si tienes preguntas sobre esta política, escríbenos a:",
};

const EN_CONTENT = {
  title: "Privacy Policy — FutCollect",
  updated: "Last updated: May 1, 2025",
  intro:
    "FutCollect is a mobile app for collecting and managing soccer stickers. We take your privacy seriously.",
  collectTitle: "Data we collect",
  collect: [
    {
      bold: "Purchase history:",
      text: "If you purchase FutCollect Pro, your transaction is processed through RevenueCat. RevenueCat may collect an anonymous user identifier and purchase history to validate your premium access. See RevenueCat's privacy policy at revenuecat.com/privacy.",
    },
    {
      bold: "Camera:",
      text: "We request camera access solely to scan QR codes from other collectors. We do not store or transmit images.",
    },
    {
      bold: "Local storage:",
      text: "All album data (stickers, progress, backups) is stored exclusively on your device. We do not upload your data to any server.",
    },
  ],
  notTitle: "What we do NOT do",
  not: [
    "We do not show ads.",
    "We do not track your activity for advertising purposes.",
    "We do not sell or share your information with third parties, except RevenueCat for purchase processing.",
  ],
  minorsTitle: "Children",
  minors:
    "FutCollect is not directed to children under 13 and does not knowingly collect data from minors. We recommend that children under 4 years of age use the app under adult supervision.",
  contactTitle: "Contact",
  contact: "If you have questions about this policy, contact us at:",
};

function PolicySection({ content }: { content: typeof ES_CONTENT }) {
  return (
    <section className="max-w-2xl w-full">
      <p className="text-sm text-text-muted mb-2">{content.updated}</p>
      <h1 className="text-3xl md:text-4xl font-bold text-text-strong mb-6 leading-tight">
        {content.title}
      </h1>
      <p className="text-text-muted mb-8 leading-relaxed">{content.intro}</p>

      <h2 className="text-xl font-semibold text-text-strong mb-4">{content.collectTitle}</h2>
      <ul className="space-y-4 mb-8">
        {content.collect.map((item) => (
          <li key={item.bold} className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-brand shrink-0" />
            <p className="text-text-muted leading-relaxed">
              <span className="font-semibold text-text-strong">{item.bold}</span> {item.text}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-text-strong mb-4">{content.notTitle}</h2>
      <ul className="space-y-3 mb-8">
        {content.not.map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="mt-2 w-2 h-2 rounded-full bg-brand shrink-0" />
            <p className="text-text-muted">{item}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-text-strong mb-3">{content.minorsTitle}</h2>
      <p className="text-text-muted mb-8 leading-relaxed">{content.minors}</p>

      <h2 className="text-xl font-semibold text-text-strong mb-3">{content.contactTitle}</h2>
      <p className="text-text-muted">
        {content.contact}{" "}
        <a
          href="mailto:mapachsoftware@gmail.com"
          className="text-brand font-medium hover:underline"
        >
          mapachsoftware@gmail.com
        </a>
      </p>
    </section>
  );
}

function PrivacyContent() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const content = lang === "es" ? ES_CONTENT : EN_CONTENT;

  return (
    <div className="min-h-screen font-sans selection:bg-brand/30 selection:text-brand-dark">
      <Navbar />
      <main className="flex flex-col items-center px-6 py-20">
        <div className="max-w-2xl w-full mb-10">
          <Link
            to="/"
            className="text-sm text-text-muted hover:text-brand transition-colors mb-6 inline-block"
          >
            ← Volver / Back
          </Link>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setLang("es")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === "es"
                  ? "bg-brand text-white"
                  : "bg-surface-soft text-text-muted hover:text-text-strong"
              }`}
            >
              Español
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === "en"
                  ? "bg-brand text-white"
                  : "bg-surface-soft text-text-muted hover:text-text-strong"
              }`}
            >
              English
            </button>
          </div>
        </div>

        <PolicySection content={content} />
      </main>
      <Footer />
    </div>
  );
}

export function Privacy() {
  return (
    <ThemeProvider>
      <PrivacyContent />
    </ThemeProvider>
  );
}
