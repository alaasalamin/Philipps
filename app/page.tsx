import Image from "next/image";
import { LogoMark, LogoWordmark } from "./components/Logo";
import { FaqSection } from "./components/FaqSection";
import { ContactForm } from "./components/ContactForm";

const PHONE_HREF = "tel:+4991718964200";
const PHONE_LABEL = "0 91 71 / 89 64 20";

const sectionPad = "px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,100px)]";
const eyebrow = "font-semibold text-[13px] text-brass tracking-[0.24em]";
const h2 =
  "font-display font-bold text-[clamp(28px,3.6vw,42px)] leading-[1.1] tracking-[0.01em]";
const brassBtn =
  "bg-brass hover:bg-brass-light text-ink font-semibold rounded-md text-center transition-colors";

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="#C58B3F"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

const services = [
  {
    title: "Schankanlagenservice",
    text: "Wartung, Reinigung und Reparatur Ihrer Schankanlage – inklusive wiederkehrender Prüfung nach DGUV Grundsatz 310-008. Erfahrenes Technikerteam, 24/7 Notdienst.",
    image: { src: "/uploads/schankanlagenservice.jpeg", alt: "Zapfhähne" },
    moreHref: "#kontakt",
    cta: "Service anfragen",
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#C58B3F" strokeWidth="2" aria-hidden="true">
        <circle cx="16" cy="16" r="6" />
        <path d="M16 2v6M16 24v6M2 16h6M24 16h6" />
      </svg>
    ),
  },
  {
    title: "Schank- & Kühlwagenverleih",
    text: "Moderne Kühlanhänger und Ausschankwagen für Events jeder Größe – von der Privatfeier bis zur Großveranstaltung. Inklusive persönlicher Beratung.",
    image: { src: "/uploads/kuehlwagenverleih.jpg", alt: "Ausschankwagen" },
    moreHref: "#verleih",
    cta: "Verleih anfragen",
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#C58B3F" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="8" width="20" height="13" rx="2" />
        <circle cx="11" cy="25" r="3" />
        <path d="M23 15h6" />
      </svg>
    ),
  },
  {
    title: "Festbedarf",
    text: "Full-Service für den Getränkeausschank auf Festen: Planung, Bedarfsermittlung und Vermietung – vom Durchlaufkühler bis zur Krugspülmaschine.",
    image: { src: "/uploads/festbedarf.jpg", alt: "Bierzeltgarnituren auf einem Fest" },
    moreHref: "#verleih",
    cta: "Fest planen",
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#C58B3F" strokeWidth="2" aria-hidden="true">
        <path d="M16 4 3 26h26z" />
        <path d="M16 4v22" />
      </svg>
    ),
  },
];

type Rental = {
  title: string;
  text: string;
  image?: { src: string; alt: string };
  placeholder?: string;
};

const rentals: Rental[] = [
  {
    title: "Kühlanhänger",
    text: "Bis 8 m³ Kühlvolumen · 2–8 °C · 230 V",
    placeholder: "[ foto: kühlanhänger ]",
  },
  {
    title: "Durchlaufkühler",
    text: "50–200 L/h · 1–4 Leitungen · steckerfertig",
    placeholder: "[ foto: durchlaufkühler ]",
  },
  {
    title: "Ausschankwagen",
    text: "2–6 Zapfstellen · Theke & Kühlung integriert",
    image: { src: "/uploads/kuehlwagenverleih.jpg", alt: "Ausschankwagen" },
  },
  {
    title: "Bierzeltgarnituren",
    text: "Tisch + 2 Bänke · stapelbar · ab 10 Stück",
    image: { src: "/uploads/festbedarf.jpg", alt: "Bierzeltgarnituren" },
  },
  {
    title: "Krugspülmaschine",
    text: "Bis 500 Krüge/h · Anschluss 400 V",
    placeholder: "[ foto: krugspülmaschine ]",
  },
];

const steps = [
  {
    title: "Anfrage",
    text: "Kurz anrufen oder das Formular ausfüllen – wir melden uns noch am selben Werktag zurück.",
  },
  {
    title: "Termin & Beratung",
    text: "Wir klären Bedarf, Umfang und Termin – ehrlich, verbindlich und ohne versteckte Kosten.",
  },
  {
    title: "Service vor Ort",
    text: "Unser Technikerteam kommt zu Ihnen – Wartung, Prüfung oder Aufbau, sauber dokumentiert.",
  },
];

const values = [
  { title: "Zuverlässigkeit", text: "Termine, die halten. Anlagen, die laufen." },
  { title: "Erfahrung", text: "Über 20 Jahre an Zapfanlagen jeder Bauart." },
  { title: "Nähe", text: "Kurze Wege, schnelle Hilfe, ein fester Ansprechpartner." },
];

const testimonials = [
  {
    quote:
      "Seit Jahren zuverlässig – die DGUV-Prüfung läuft bei uns wie am Schnürchen, und im Notfall ist immer jemand erreichbar.",
    name: "Gasthof Zur Linde",
    role: "Wirtshaus, Landkreis Roth",
  },
  {
    quote:
      "Kühlanhänger und Ausschankwagen fürs Vereinsfest – geliefert, aufgebaut, eingewiesen. Besser geht's nicht.",
    name: "SV Frankenblick e. V.",
    role: "Sportverein, Fränkische Schweiz",
  },
  {
    quote:
      "Beim Stadtfest mit 8 Zapfstellen lief alles störungsfrei – Planung und Bedarfsermittlung haben exakt gepasst.",
    name: "Festkomitee Altstadtfest",
    role: "Großveranstaltung, Mittelfranken",
  },
];

const regions = [
  "Nürnberg",
  "Fürth",
  "Erlangen",
  "Ansbach",
  "Bamberg",
  "Bayreuth",
  "Regensburg",
  "Ingolstadt",
];

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#verleih", label: "Verleih & Festbedarf" },
  { href: "#ueberuns", label: "Über uns" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Home() {
  return (
    <div className="min-w-[320px]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-ink px-[clamp(16px,4vw,40px)]">
        <div className="max-w-[1200px] mx-auto flex items-center gap-4 flex-wrap py-3">
          <a href="#top" className="flex items-center gap-3">
            <LogoMark size={38} />
            <LogoWordmark />
          </a>
          <nav className="flex gap-[clamp(12px,2vw,24px)] flex-wrap ml-auto items-center">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-medium text-sm text-cream hover:text-brass transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3.5 ml-auto">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 font-semibold text-sm text-cream hover:text-brass transition-colors"
            >
              <PhoneIcon />
              <span>{PHONE_LABEL}</span>
            </a>
            <a
              href="#kontakt"
              className={`${brassBtn} text-[13px] px-4 py-2.5 whitespace-nowrap`}
            >
              Notdienst / Rückruf
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative bg-ink overflow-hidden">
        <Image
          src="/uploads/schankanlagenservice.jpeg"
          alt="Zapfhähne einer Schankanlage"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(27,31,35,0.95)_25%,rgba(27,31,35,0.45))]" />
        <div className="relative max-w-[1200px] mx-auto px-[clamp(16px,4vw,40px)] pt-[clamp(64px,10vw,130px)] pb-[clamp(48px,7vw,90px)]">
          <div className={`${eyebrow} mb-[18px]`}>MEISTERBETRIEB · FRANKEN</div>
          <h1 className="m-0 max-w-[820px] font-display font-bold text-[clamp(34px,5.5vw,60px)] leading-[1.05] text-cream tracking-[0.01em] text-pretty">
            Schankanlagen-Service, Wartung &amp; DGUV-Prüfung für Gastronomie
            und Feste in Franken
          </h1>
          <p className="max-w-[560px] text-[clamp(15px,1.6vw,18px)] leading-relaxed text-fog mt-5 mb-8">
            Vom Zapfhahn bis zur wiederkehrenden Prüfung nach DGUV Grundsatz
            310-008 – wir halten Ihre Schankanlage sauber, sicher und
            einsatzbereit. Rund um die Uhr.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a href="#kontakt" className={`${brassBtn} text-base px-[30px] py-[15px]`}>
              Jetzt anfragen
            </a>
            <a
              href={PHONE_HREF}
              className="border-2 border-cream text-cream hover:border-brass hover:text-brass font-semibold text-base px-[30px] py-[13px] rounded-md transition-colors"
            >
              Anrufen
            </a>
          </div>
        </div>
        <div className="relative border-t border-cream/12">
          <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,40px)] py-[18px] flex gap-[clamp(16px,3vw,40px)] flex-wrap">
            {[
              "Über 20 Jahre Erfahrung",
              "24/7 Notdienst-Bereitschaft",
              "DGUV 310-008 Prüfung",
              "Regional in Franken",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 font-medium text-[13px] text-cream"
              >
                <span className="size-[7px] bg-brass rounded-full" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className={`bg-cream ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className={eyebrow}>LEISTUNGEN</div>
          <h2 className={`${h2} mt-2.5 mb-10`}>Alles rund um Ihre Schankanlage</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-[10px] shadow-[0_4px_20px_rgba(27,31,35,0.07)] overflow-hidden flex flex-col gap-3.5 pb-7"
              >
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  width={600}
                  height={170}
                  className="w-full h-[170px] object-cover block"
                />
                <div className="px-7 flex flex-col gap-3.5 flex-1">
                  {s.icon}
                  <h3 className="m-0 font-display font-bold text-2xl">{s.title}</h3>
                  <p className="m-0 text-[15px] leading-relaxed text-steel flex-1">
                    {s.text}
                  </p>
                  <a
                    href={s.moreHref}
                    className="font-semibold text-sm text-brass hover:text-ink transition-colors"
                  >
                    Mehr erfahren →
                  </a>
                  <a href="#kontakt" className={`${brassBtn} text-sm px-5 py-3`}>
                    {s.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verleih & Festbedarf */}
      <section id="verleih" className={`bg-white ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className={eyebrow}>VERLEIH &amp; FESTBEDARF</div>
          <h2 className={`${h2} mt-2.5 mb-3`}>Mietgeräte für Ihr Fest</h2>
          <p className="mb-10 max-w-[560px] text-base leading-relaxed text-steel">
            Gepflegte Technik, geprüft und einsatzbereit. Lieferung, Aufbau und
            Einweisung auf Wunsch inklusive.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
            {rentals.map((r) => (
              <div
                key={r.title}
                className="bg-cream rounded-[10px] overflow-hidden flex flex-col"
              >
                {r.image ? (
                  <Image
                    src={r.image.src}
                    alt={r.image.alt}
                    width={460}
                    height={150}
                    className="w-full h-[150px] object-cover block"
                  />
                ) : (
                  <div className="photo-placeholder h-[150px]">{r.placeholder}</div>
                )}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <div className="font-display font-bold text-xl text-ink">
                    {r.title}
                  </div>
                  <div className="text-[13px] leading-normal text-steel flex-1">
                    {r.text}
                  </div>
                  <a href="#kontakt" className={`${brassBtn} text-[13px] px-4 py-2.5`}>
                    Anfragen
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className={`bg-ink ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className={eyebrow}>SO LÄUFT&apos;S AB</div>
          <h2 className={`${h2} mt-2.5 mb-10 text-cream`}>
            In drei Schritten zum Service
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-3.5">
                <div className="size-[52px] rounded-full bg-brass flex items-center justify-center font-display font-bold text-2xl text-ink">
                  {i + 1}
                </div>
                <div className="font-display font-bold text-[22px] text-cream">
                  {s.title}
                </div>
                <p className="m-0 text-sm leading-relaxed text-fog">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueberuns" className={`bg-cream ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 items-center">
          <div className="photo-placeholder h-[clamp(260px,32vw,400px)] rounded-[10px] text-xs">
            [ foto: inhaber &amp; team vor dem servicefahrzeug ]
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className={eyebrow}>ÜBER UNS</div>
            <h2 className={`${h2} m-0`}>Handwerk aus Franken – für Franken</h2>
            <p className="m-0 text-base leading-[1.7] text-steel">
              Philipps Schankanlagenservice ist ein familiengeführter
              Handwerksbetrieb aus dem Nürnberger Land. Was mit Wartung für
              örtliche Wirtshäuser begann, ist heute ein voll ausgestatteter
              Service für Gastronomie, Vereine, Brauereien und Festveranstalter
              in ganz Franken.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 mt-1.5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-[10px] p-[18px] shadow-[0_4px_20px_rgba(27,31,35,0.06)]"
                >
                  <div className="font-display font-bold text-[19px]">{v.title}</div>
                  <div className="text-[13px] leading-normal text-steel mt-1">
                    {v.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referenzen */}
      <section id="referenzen" className={`bg-white ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className={eyebrow}>REFERENZEN</div>
          <h2 className={`${h2} mt-2.5 mb-10`}>Das sagen Wirte &amp; Vereine</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream rounded-[10px] p-7 flex flex-col gap-3.5"
              >
                <div className="font-display font-bold text-[34px] leading-[0.5] text-brass">
                  „
                </div>
                <p className="m-0 text-[15px] leading-relaxed flex-1">{t.quote}</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-[13px] text-steel">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex gap-[clamp(24px,4vw,56px)] flex-wrap items-center justify-center opacity-55">
            {[
              "BRAUEREI SCHWANENBRÄU",
              "FELSENKELLER BRÄU",
              "ALTSTADTFEST",
              "KIRCHWEIH GVSD",
            ].map((brand) => (
              <span
                key={brand}
                className="font-display font-bold text-xl tracking-[0.1em] text-steel"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Servicegebiet */}
      <section className={`bg-cream ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 items-center">
          <div className="flex flex-col gap-[18px]">
            <div className={eyebrow}>SERVICEGEBIET</div>
            <h2 className={`${h2} m-0`}>In ganz Franken für Sie unterwegs</h2>
            <p className="m-0 text-base leading-[1.7] text-steel">
              Unser Kerngebiet liegt im Umkreis von rund 80 km um Roth – für
              Wartungsverträge und Festbedarf fahren wir gerne auch weiter.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {regions.map((r) => (
                <span
                  key={r}
                  className="bg-white rounded-full px-4 py-2 font-medium text-[13px] text-ink shadow-[0_2px_10px_rgba(27,31,35,0.06)]"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[min(380px,80vw)] aspect-square">
              <div className="absolute inset-0 border-2 border-dashed border-brass rounded-full opacity-50" />
              <div className="absolute inset-[18%] border-2 border-dashed border-brass rounded-full opacity-75" />
              <div className="absolute inset-[36%] border-2 border-brass rounded-full bg-brass/8" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                <LogoMark size={34} />
                <span className="font-display font-bold text-base text-ink">
                  ROTH
                </span>
              </div>
              <span className="absolute right-[4%] top-[14%] font-medium text-[11px] text-steel">
                ~80 km
              </span>
              <span className="absolute right-[22%] top-[30%] font-medium text-[11px] text-steel">
                ~40 km
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`bg-white ${sectionPad}`}>
        <div className="max-w-[820px] mx-auto">
          <div className={eyebrow}>HÄUFIGE FRAGEN</div>
          <h2 className={`${h2} mt-2.5 mb-8`}>Gut zu wissen</h2>
          <FaqSection />
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className={`bg-cream ${sectionPad}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className={eyebrow}>KONTAKT</div>
          <h2 className={`${h2} mt-2.5 mb-10`}>Anfrage stellen – wir melden uns</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
            <div className="flex flex-col gap-[22px]">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3.5 text-ink hover:text-brass transition-colors"
              >
                <span className="size-11 rounded-[10px] bg-ink flex items-center justify-center shrink-0">
                  <PhoneIcon size={18} />
                </span>
                <span>
                  <span className="block font-semibold text-base">
                    {PHONE_LABEL}
                  </span>
                  <span className="block text-[13px] text-steel">
                    24/7 Notdienst
                  </span>
                </span>
              </a>
              <a
                href="mailto:info@philipps-schankservice.de"
                className="flex items-center gap-3.5 text-ink hover:text-brass transition-colors"
              >
                <span className="size-11 rounded-[10px] bg-ink flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#C58B3F" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span>
                  <span className="block font-semibold text-base">
                    info@philipps-schankservice.de
                  </span>
                  <span className="block text-[13px] text-steel">
                    Antwort am selben Werktag
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-3.5">
                <span className="size-11 rounded-[10px] bg-ink flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#C58B3F" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 1 8 8c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 8-8z" />
                  </svg>
                </span>
                <span>
                  <span className="block font-semibold text-base">
                    Industriestraße 12 · 91154 Roth
                  </span>
                  <span className="block text-[13px] text-steel">
                    Termine nach Vereinbarung
                  </span>
                </span>
              </div>
              <div className="photo-placeholder h-[180px] rounded-[10px]">
                [ karten-einbettung: standort roth ]
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink px-[clamp(16px,4vw,40px)] pt-[clamp(40px,6vw,64px)] pb-7">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-9">
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <LogoMark size={40} />
                <LogoWordmark large />
              </div>
              <p className="m-0 text-[13px] leading-relaxed text-mist">
                Service · Wartung · Verleih
                <br />
                Ihr Schankanlagen-Partner in Franken.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-semibold text-xs text-brass tracking-[0.2em]">
                NAVIGATION
              </div>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-fog hover:text-brass transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-semibold text-xs text-brass tracking-[0.2em]">
                ERREICHBARKEIT
              </div>
              <div className="text-sm leading-[1.7] text-fog">
                Mo–Fr 7:30–17:00 Uhr
                <br />
                Sa nach Vereinbarung
                <br />
                <span className="text-cream font-semibold">Notdienst: 24/7</span>
              </div>
              <a
                href={PHONE_HREF}
                className="font-semibold text-[15px] text-brass hover:text-cream transition-colors"
              >
                {PHONE_LABEL}
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-semibold text-xs text-brass tracking-[0.2em]">
                RECHTLICHES
              </div>
              <a href="#" className="text-sm text-fog hover:text-brass transition-colors">
                Impressum
              </a>
              <a href="#" className="text-sm text-fog hover:text-brass transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
          <div className="border-t border-cream/12 pt-5 text-[13px] text-mist">
            © 2026 Philipps Schankanlagenservice · Alle Rechte vorbehalten
          </div>
        </div>
      </footer>
    </div>
  );
}
