import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../theme/ThemeContext";
import { LanguageProvider, useLang } from "../i18n/LanguageContext";

type CollectItem = { bold: string; text: string };

type Content = {
  title: string;
  updated: string;
  intro: string;
  collectTitle: string;
  collect: CollectItem[];
  adsTitle: string;
  adsIntro: string;
  adsBullets: string[];
  adsParagraphs: string[];
  notTitle: string;
  not: string[];
  minorsTitle: string;
  minors: string;
  rightsTitle: string;
  rights: string;
  changesTitle: string;
  changes: string;
  contactTitle: string;
  contact: string;
};

const ES_CONTENT: Content = {
  title: "Política de Privacidad — FutCollect",
  updated: "Última actualización: 22 de mayo de 2026",
  intro:
    "FutCollect es una aplicación móvil para coleccionar y gestionar estampas de fútbol. Nos tomamos tu privacidad en serio y solo recopilamos lo estrictamente necesario para que la app funcione.",
  collectTitle: "Datos que recopilamos directamente",
  collect: [
    {
      bold: "Almacenamiento local.",
      text: "Toda la información de tu álbum (estampas pegadas, progreso, partidos, configuración, respaldos) se guarda exclusivamente en tu dispositivo. No subimos esos datos a ningún servidor nuestro.",
    },
    {
      bold: "Cámara.",
      text: "Solicitamos acceso a la cámara únicamente cuando tú decides escanear o compartir códigos QR de intercambio con otros coleccionistas. Las imágenes se procesan en tiempo real en tu dispositivo y no se almacenan, suben ni transmiten.",
    },
    {
      bold: "Historial de compras (solo si compras FutCollect Pro).",
      text: "Procesamos las compras dentro de la app a través de RevenueCat. RevenueCat asigna un identificador anónimo a tu instalación y registra el historial de compras para validar tu acceso premium. RevenueCat no recibe tu nombre, email ni ningún dato personal identificable de nuestra parte. Política de privacidad de RevenueCat: revenuecat.com/privacy.",
    },
  ],
  adsTitle: "Anuncios publicitarios (Google AdMob)",
  adsIntro:
    "La versión gratuita de FutCollect muestra anuncios proporcionados por Google AdMob. Para servirte los anuncios, AdMob/Google puede recopilar:",
  adsBullets: [
    "Tu dirección IP y ubicación general aproximada (a nivel de ciudad o región).",
    "Información del dispositivo (modelo, sistema operativo, idioma, país).",
    "Datos de interacción con los anuncios (impresiones, clicks).",
    "Un identificador de anuncios del dispositivo (IDFA en iOS, Advertising ID en Android), solo si tú lo permites desde la configuración de tu sistema.",
  ],
  adsParagraphs: [
    "En iOS, FutCollect actualmente no solicita permiso para rastreo entre apps (App Tracking Transparency), por lo que AdMob te muestra anuncios no personalizados por defecto. En Android puedes limitar la personalización en Ajustes → Google → Anuncios.",
    "Estos datos los gestiona Google directamente, no nosotros. Política de privacidad de Google: policies.google.com/privacy. Si compras FutCollect Pro, los anuncios se eliminan por completo y AdMob deja de cargarse.",
  ],
  notTitle: "Lo que NO hacemos",
  not: [
    "No tenemos cuentas de usuario, login, ni servidores propios donde almacenemos datos.",
    "No vendemos ni alquilamos tu información a terceros.",
    "No te rastreamos entre apps con fines publicitarios.",
    "No compartimos tu información con terceros, excepto con los proveedores estrictamente necesarios mencionados (Google AdMob para mostrar anuncios y RevenueCat para procesar compras), cada uno con su propia política de privacidad.",
    "No recopilamos datos de menores intencionalmente.",
  ],
  minorsTitle: "Menores de edad",
  minors:
    "FutCollect no está dirigida a menores de 13 años y no recopilamos a sabiendas datos personales de menores. Recomendamos que niños menores de 4 años usen la app bajo supervisión de un adulto. Si crees que un menor ha proporcionado datos a través de la app, contáctanos para eliminarlos.",
  rightsTitle: "Tus derechos",
  rights:
    "Como todos los datos de tu álbum se almacenan localmente en tu dispositivo, puedes eliminarlos en cualquier momento desinstalando la app o borrando los datos de la aplicación desde los ajustes del sistema. Para datos en poder de Google o RevenueCat, debes solicitarlos directamente a cada uno mediante los enlaces de sus políticas de privacidad.",
  changesTitle: "Cambios en esta política",
  changes:
    "Si actualizamos esta política, cambiaremos la fecha de «Última actualización» arriba y, si los cambios son materiales, lo destacaremos dentro de la app o en la descripción de la App Store.",
  contactTitle: "Contacto",
  contact: "Si tienes preguntas sobre esta política, escríbenos a:",
};

const EN_CONTENT: Content = {
  title: "Privacy Policy — FutCollect",
  updated: "Last updated: May 22, 2026",
  intro:
    "FutCollect is a mobile app for collecting and managing soccer stickers. We take your privacy seriously and only collect what is strictly necessary for the app to work.",
  collectTitle: "Data we collect directly",
  collect: [
    {
      bold: "Local storage.",
      text: "All your album data (placed stickers, progress, matches, settings, backups) is stored exclusively on your device. We do not upload any of it to our servers.",
    },
    {
      bold: "Camera.",
      text: "We request camera access only when you choose to scan or share trade QR codes with other collectors. Images are processed in real time on your device and are never stored, uploaded, or transmitted.",
    },
    {
      bold: "Purchase history (only if you buy FutCollect Pro).",
      text: "We process in-app purchases through RevenueCat. RevenueCat assigns an anonymous identifier to your install and records your purchase history to validate your premium access. RevenueCat does not receive your name, email, or any personally identifiable data from us. RevenueCat privacy policy: revenuecat.com/privacy.",
    },
  ],
  adsTitle: "Advertising (Google AdMob)",
  adsIntro:
    "The free version of FutCollect displays ads served by Google AdMob. To deliver these ads, AdMob/Google may collect:",
  adsBullets: [
    "Your IP address and approximate general location (city or region level).",
    "Device information (model, operating system, language, country).",
    "Ad interaction data (impressions, clicks).",
    "A device advertising identifier (IDFA on iOS, Advertising ID on Android), only if you allow it in your system settings.",
  ],
  adsParagraphs: [
    "On iOS, FutCollect currently does not request App Tracking Transparency permission, so AdMob serves non-personalized ads by default. On Android, you can limit personalization under Settings → Google → Ads.",
    "This data is handled directly by Google, not by us. Google's privacy policy: policies.google.com/privacy. If you purchase FutCollect Pro, ads are removed entirely and AdMob stops loading.",
  ],
  notTitle: "What we do NOT do",
  not: [
    "We have no user accounts, logins, or our own servers storing data.",
    "We do not sell or rent your information to third parties.",
    "We do not track you across apps for advertising purposes.",
    "We do not share your information with third parties, except with the strictly necessary providers mentioned (Google AdMob to serve ads and RevenueCat to process purchases), each with their own privacy policy.",
    "We do not knowingly collect data from minors.",
  ],
  minorsTitle: "Children",
  minors:
    "FutCollect is not directed to children under 13 and we do not knowingly collect personal data from minors. We recommend children under 4 use the app under adult supervision. If you believe a minor has provided data through the app, contact us to delete it.",
  rightsTitle: "Your rights",
  rights:
    "Because all album data is stored locally on your device, you can delete it at any time by uninstalling the app or clearing the app's data from your system settings. For data held by Google or RevenueCat, you must request it directly from each through the links in their privacy policies.",
  changesTitle: "Changes to this policy",
  changes:
    "If we update this policy, we will change the \"Last updated\" date above and, if changes are material, highlight them inside the app or in the App Store description.",
  contactTitle: "Contact",
  contact: "If you have questions about this policy, contact us at:",
};

function PolicySection({ content }: { content: Content }) {
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

      <h2 className="text-xl font-semibold text-text-strong mb-4">{content.adsTitle}</h2>
      <p className="text-text-muted mb-4 leading-relaxed">{content.adsIntro}</p>
      <ul className="space-y-3 mb-6">
        {content.adsBullets.map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="mt-2 w-2 h-2 rounded-full bg-brand shrink-0" />
            <p className="text-text-muted leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
      {content.adsParagraphs.map((p) => (
        <p key={p} className="text-text-muted mb-4 leading-relaxed">
          {p}
        </p>
      ))}

      <h2 className="text-xl font-semibold text-text-strong mb-4 mt-8">{content.notTitle}</h2>
      <ul className="space-y-3 mb-8">
        {content.not.map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="mt-2 w-2 h-2 rounded-full bg-brand shrink-0" />
            <p className="text-text-muted leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-text-strong mb-3">{content.minorsTitle}</h2>
      <p className="text-text-muted mb-8 leading-relaxed">{content.minors}</p>

      <h2 className="text-xl font-semibold text-text-strong mb-3">{content.rightsTitle}</h2>
      <p className="text-text-muted mb-8 leading-relaxed">{content.rights}</p>

      <h2 className="text-xl font-semibold text-text-strong mb-3">{content.changesTitle}</h2>
      <p className="text-text-muted mb-8 leading-relaxed">{content.changes}</p>

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
  const { lang, t } = useLang();
  const content = lang === "es" ? ES_CONTENT : EN_CONTENT;

  return (
    <div className="min-h-screen font-sans selection:bg-brand/30 selection:text-brand-dark">
      <Navbar />
      <main className="flex flex-col items-center px-6 py-20">
        <div className="max-w-2xl w-full mb-10">
          <Link
            to="/"
            className="text-sm text-text-muted hover:text-brand transition-colors inline-block"
          >
            {t.common.back}
          </Link>
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
      <LanguageProvider>
        <PrivacyContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
