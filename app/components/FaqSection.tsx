"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Wie oft muss meine Schankanlage geprüft werden?",
    a: "Die wiederkehrende Prüfung nach DGUV Grundsatz 310-008 ist in der Regel alle zwei Jahre fällig. Wir erinnern Sie rechtzeitig und übernehmen Prüfung samt Dokumentation.",
  },
  {
    q: "Was kostet eine Wartung?",
    a: "Das hängt von Anlagengröße und Zustand ab. Nach einem kurzen Telefonat nennen wir Ihnen einen verbindlichen Festpreis – ohne versteckte Kosten. Wartungsverträge gibt es zu vergünstigten Konditionen.",
  },
  {
    q: "Wie schnell sind Sie im Notfall da?",
    a: "Unser Notdienst ist rund um die Uhr erreichbar. Im Kerngebiet um Roth sind wir in der Regel innerhalb weniger Stunden vor Ort – am Wochenende und an Feiertagen ebenso.",
  },
  {
    q: "Wie lange kann ich Kühlanhänger & Co. mieten?",
    a: "Vom Wochenende bis zur mehrwöchigen Festsaison – die Mietdauer richtet sich nach Ihrem Event. Bei Großveranstaltungen reservieren Sie am besten 4–8 Wochen im Voraus.",
  },
  {
    q: "Übernehmen Sie Lieferung und Aufbau?",
    a: "Ja. Auf Wunsch liefern wir, bauen auf, schließen an und weisen Ihr Personal ein. Nach dem Fest holen wir alles wieder ab und übernehmen die Reinigung.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="bg-cream rounded-[10px] overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 px-[22px] py-[18px] cursor-pointer text-left font-semibold text-base text-ink"
            aria-expanded={open === i}
          >
            <span>{f.q}</span>
            <span className="font-semibold text-xl text-brass shrink-0">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="px-[22px] pb-5 text-[15px] leading-relaxed text-steel">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
