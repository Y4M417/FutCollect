// ============================================================================
// Diccionarios de traducción (ES / EN).
// El objeto `es` define la forma; `en` debe cumplir el mismo tipo `Copy`.
// Acceso desde componentes: const { t } = useLang();  t.hero.title ...
// ============================================================================

const es = {
  nav: {
    questions: "Preguntas",
    features: "Características",
    qrExchange: "Intercambio QR",
    news: "Noticias",
    menu: "Menú",
  },
  hero: {
    titleA: "El control de tu",
    titleHighlight: "álbum del Mundial",
    titleB: "en tu bolsillo.",
    subtitle:
      "Registra tus estampas, descubre cuáles te faltan y encuentra el intercambio perfecto con tus amigos en segundos usando tecnología QR. Sin hojas de papel, sin complicaciones.",
    androidCta: "Descárgala en Android",
    iosCta: "Ve a la app en iOS",
    howQr: "Cómo funciona el QR",
    followUs: "Síguenos en redes",
  },
  features: {
    title: "Todo lo que necesitas para completar tu álbum",
    subtitle:
      "Olvídate de las listas de papel. Usa nuestras herramientas para saber exactamente qué tienes, qué te falta y cómo conseguirlo más rápido.",
    qrSwap: {
      title: "Intercambio Rápido por QR",
      desc: "Nuestra función estrella. Escanea el código de tu amigo y la app analizará ambas colecciones al instante. Te diremos exactamente qué intercambiar.",
    },
    visualControl: {
      title: "Control Visual",
      desc: "Navega por equipos, marca estampas con un toque y mantén un control de tu avance. Registrar tu progreso nunca ha sido tan fácil y profesional.",
    },
    worldProgress: {
      title: "Progreso Mundial",
      desc: "Visualiza tu avance con gráficas interactivas y un mapamundi que cobra vida conforme llenas tu álbum. Coleccionar nunca fue tan visual — y tan adictivo.",
    },
    smartFilters: {
      title: "Filtros Inteligentes",
      desc: "Obtén listas exactas de las estampas que te faltan y las que tienes repetidas. Filtra por grupo, equipo, o estado para encontrar lo que buscas al instante.",
    },
    stats: {
      title: "Estadísticas Detalladas",
      desc: "Consulta tu progreso general, mantén registro de tus estampas faltantes y repetidas, y obtén información precisa de cómo avanza tu colección en cada grupo del álbum mundialista.",
    },
    calendar: {
      title: "Calendario Oficial",
      desc: "Sigue todos los partidos del mundial con horarios ajustados automáticamente a tu zona local. Nunca más te pierdas un juego — la app te muestra qué equipos juegan, a qué hora y en qué grupo.",
    },
  },
  qr: {
    badge: "Intercambio QR",
    title: "Cambia estampas en 4 pasos",
    subtitle: "Olvídate de comparar listas a mano. La app hace el match por ti.",
    stepLabel: "Paso",
    steps: [
      {
        title: "Registra tus estampas",
        desc: "Abre FutCollect y selecciona tu álbum. Navega por equipos y marca qué estampas ya tienes y cuáles tienes repetidas. Así la app sabe exactamente con qué cuentas para intercambiar.",
      },
      {
        title: "Genera o escanea el QR",
        desc: "Ve a la sección de Intercambio QR y genera tu código personal, o escanea el de tu amigo. En segundos, la app cruza ambas colecciones y detecta qué le sobra a cada quien.",
      },
      {
        title: "Elige qué intercambiar",
        desc: "La app te muestra cuáles de tus repetidas le sirven a tu amigo, y cuáles de las suyas te sirven a ti. Solo ve seleccionando las estampas que van a intercambiar — sin adivinar, sin errores.",
      },
      {
        title: "Confirma y listo",
        desc: "Una vez que ambos se pongan de acuerdo, da clic en Guardar. La app te muestra una vista previa del intercambio. Presiona Confirmar y los cambios se reflejan de inmediato en tu álbum.",
      },
    ],
  },
  faq: {
    badge: "Preguntas frecuentes",
    title: "¿Tienes dudas?",
    subtitle: "Las preguntas que más nos hacen sobre FutCollect.",
    items: [
      {
        q: "¿Para qué sirve FutCollect?",
        a: "FutCollect es tu álbum digital del Mundial: registra las estampas que tienes, descubre cuáles te faltan o tienes repetidas, y encuentra intercambios con otros coleccionistas escaneando un código QR. Todo desde tu celular, sin hojas de papel.",
      },
      {
        q: "¿Necesito internet para usar la app?",
        a: "Solo necesitas internet para descargar la app y para actualizar los resultados de los partidos. Para registrar y editar tus estampas, así como para hacer el Intercambio por QR, no necesitas conexión a internet.",
      },
      {
        q: "¿En qué dispositivos estará disponible?",
        a: "FutCollect llegará a iOS y Android. La primera versión saldrá en iOS y, poco después, lanzaremos la versión para Android. Suscríbete con tu correo para enterarte el día exacto del lanzamiento.",
      },
      {
        q: "¿Cuánto cuesta la aplicación?",
        a: "La descarga y las funciones principales (registrar tu colección, ver faltantes, intercambiar por QR) son completamente gratuitas. Dentro de la app habrá compras integradas opcionales, pero podrás seguir utilizando todas las características básicas sin pagar nada.",
      },
      {
        q: "¿Cómo funciona el Intercambio por QR?",
        a: "Cada usuario tiene un QR personal con su lista de repetidas y faltantes. Al escanearse mutuamente, la app cruza ambas colecciones y te muestra exactamente qué estampas pueden cambiar entre ustedes. Más arriba en esta página aparecen los pasos.",
      },
      {
        q: "¿Cómo registro una estampa?",
        a: "¡Es muy fácil! En la sección de 'Mi Álbum', selecciona el equipo y simplemente toca el número de la estampa. Un toque para indicar que la tienes, dos toques si la tienes repetida. ¡Así de rápido y sencillo!",
      },
    ],
  },
  social: {
    badge: "Comunidad",
    title: "Síguenos en nuestras redes",
    subtitle:
      "Mantente al tanto de los próximos lanzamientos, actualizaciones y nuevas dinámicas uniéndote a nuestra comunidad.",
  },
  waitlist: {
    title: "¿Listo para llenar tu álbum?",
    subtitle:
      "Únete a la comunidad de coleccionistas para este mundial. Sé de los primeros en probar en su lanzamiento FutCollect.",
    cta: "Unirme a la lista",
    note: "Disponible próximamente · Primero en iOS, después en Android.",
  },
  footer: {
    tagline:
      "El compañero digital para los coleccionistas del album del mundial. Intercambia, organiza y completa tu álbum más rápido.",
    product: "Producto",
    support: "Soporte",
    privacy: "Privacidad",
    rights: "© 2026 ProcyonMX. Todos los derechos reservados.",
  },
  country: {
    mexico: "México",
    usa: "USA",
    canada: "Canadá",
  },
  controls: {
    theme: "Cambiar tema",
    language: "Cambiar idioma",
  },
  common: {
    back: "← Volver",
  },
  news: {
    title: "Noticias",
    selectPrompt: "Selecciona una noticia para leerla.",
    empty: "Aún no hay noticias de este tipo.",
    backAria: "Volver a la lista",
    prevImage: "Imagen anterior",
    nextImage: "Imagen siguiente",
    goToImage: "Ir a la imagen",
    typeLabels: { update: "Update", evento: "Evento", anuncio: "Anuncio" },
    filters: { update: "Updates", evento: "Eventos", anuncio: "Anuncios" },
  },
  privacy: {
    backLabel: "← Volver",
  },
};

export type Copy = typeof es;

const en: Copy = {
  nav: {
    questions: "FAQ",
    features: "Features",
    qrExchange: "QR Swap",
    news: "News",
    menu: "Menu",
  },
  hero: {
    titleA: "Take control of your",
    titleHighlight: "international football collection",
    titleB: "right in your pocket.",
    subtitle:
      "Track your stickers, find out which ones you're missing, and find the perfect swap with your friends in seconds using QR technology. No paper checklists, no hassle.",
    androidCta: "Get it on Android",
    iosCta: "Get the iOS app",
    howQr: "How QR works",
    followUs: "Follow us on social",
  },
  features: {
    title: "Everything you need to complete your album",
    subtitle:
      "Forget paper checklists. Use our tools to know exactly what you have, what you're missing, and how to get it faster.",
    qrSwap: {
      title: "Fast QR Swap",
      desc: "Our flagship feature. Scan your friend's code and the app instantly analyzes both collections. We'll tell you exactly what to swap.",
    },
    visualControl: {
      title: "Visual Control",
      desc: "Browse by team, mark stickers with a tap, and keep track of your progress. Logging your progress has never been this easy and polished.",
    },
    worldProgress: {
      title: "World Progress",
      desc: "Visualize your progress with interactive charts and a world map that comes alive as you fill your album. Collecting has never been this visual — or this addictive.",
    },
    smartFilters: {
      title: "Smart Filters",
      desc: "Get exact lists of the stickers you're missing and the ones you have as duplicates. Filter by group, team, or status to find what you need instantly.",
    },
    stats: {
      title: "Detailed Stats",
      desc: "Check your overall progress, keep track of your missing and duplicate stickers, and get precise insights into how your collection is advancing in every group of your international football collection.",
    },
    calendar: {
      title: "Official Calendar",
      desc: "Follow every international football match with kickoff times automatically adjusted to your local time zone. Never miss a game — the app shows you which teams play, at what time, and in which group.",
    },
  },
  qr: {
    badge: "QR Swap",
    title: "Swap stickers in 4 steps",
    subtitle: "Forget comparing lists by hand. The app makes the match for you.",
    stepLabel: "Step",
    steps: [
      {
        title: "Log your stickers",
        desc: "Open FutCollect and pick your album. Browse by team and mark which stickers you already have and which ones are duplicates. That way the app knows exactly what you've got to trade.",
      },
      {
        title: "Generate or scan the QR",
        desc: "Go to the QR Swap section and generate your personal code, or scan your friend's. In seconds, the app cross-checks both collections and detects what each of you has to spare.",
      },
      {
        title: "Choose what to swap",
        desc: "The app shows you which of your duplicates your friend needs, and which of theirs you need. Just select the stickers you're going to swap — no guessing, no mistakes.",
      },
      {
        title: "Confirm and you're done",
        desc: "Once you both agree, tap Save. The app shows you a preview of the swap. Press Confirm and the changes are reflected in your album right away.",
      },
    ],
  },
  faq: {
    badge: "Frequently asked questions",
    title: "Got questions?",
    subtitle: "The questions we get asked most about FutCollect.",
    items: [
      {
        q: "What is FutCollect for?",
        a: "FutCollect is the digital home for your international football collection: log the stickers you have, find out which ones you're missing or have as duplicates, and find swaps with other collectors by scanning a QR code. All from your phone, no paper checklists.",
      },
      {
        q: "Do I need internet to use the app?",
        a: "You only need internet to download the app and to update match results. To log and edit your stickers, as well as to do the QR Swap, you don't need an internet connection.",
      },
      {
        q: "What devices will it be available on?",
        a: "FutCollect is coming to iOS and Android. The first version launches on iOS, and shortly after we'll release the Android version. Sign up with your email to find out the exact launch day.",
      },
      {
        q: "How much does the app cost?",
        a: "The download and the core features (logging your collection, seeing what's missing, swapping via QR) are completely free. There will be optional in-app purchases, but you'll be able to keep using all the basic features without paying anything.",
      },
      {
        q: "How does the QR Swap work?",
        a: "Each user has a personal QR with their list of duplicates and missing stickers. When you scan each other, the app cross-checks both collections and shows you exactly which stickers you can swap. The steps appear higher up on this page.",
      },
      {
        q: "How do I log a sticker?",
        a: "It's super easy! In the 'My Album' section, pick the team and just tap the sticker number. One tap to mark you have it, two taps if it's a duplicate. That quick and simple!",
      },
    ],
  },
  social: {
    badge: "Community",
    title: "Follow us on social",
    subtitle:
      "Stay up to date with upcoming releases, updates, and new activities by joining our community.",
  },
  waitlist: {
    title: "Ready to fill your album?",
    subtitle:
      "Join the community of international football collectors. Be among the first to try FutCollect at launch.",
    cta: "Join the list",
    note: "Coming soon · iOS first, then Android.",
  },
  footer: {
    tagline:
      "The digital companion for international football collectors. Swap, organize, and complete your album faster.",
    product: "Product",
    support: "Support",
    privacy: "Privacy",
    rights: "© 2026 ProcyonMX. All rights reserved.",
  },
  country: {
    mexico: "Mexico",
    usa: "USA",
    canada: "Canada",
  },
  controls: {
    theme: "Toggle theme",
    language: "Switch language",
  },
  common: {
    back: "← Back",
  },
  news: {
    title: "News",
    selectPrompt: "Select a news item to read it.",
    empty: "No news of this type yet.",
    backAria: "Back to list",
    prevImage: "Previous image",
    nextImage: "Next image",
    goToImage: "Go to image",
    typeLabels: { update: "Update", evento: "Event", anuncio: "Announcement" },
    filters: { update: "Updates", evento: "Events", anuncio: "Announcements" },
  },
  privacy: {
    backLabel: "← Back",
  },
};

export const TRANSLATIONS: Record<"es" | "en", Copy> = { es, en };
