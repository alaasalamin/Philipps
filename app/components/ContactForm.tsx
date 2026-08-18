"use client";

import { useState } from "react";

const inputClasses =
  "border border-line rounded-md px-3.5 py-3 text-[15px] font-normal text-ink bg-white";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-white rounded-[10px] shadow-[0_4px_24px_rgba(27,31,35,0.08)] p-8 flex flex-col gap-4"
    >
      {sent && (
        <div className="bg-cream rounded-lg p-4 font-medium text-[15px] text-ink">
          Danke für Ihre Anfrage! Wir melden uns schnellstmöglich – im Notfall
          rufen Sie bitte direkt an.
        </div>
      )}
      <label className="flex flex-col gap-1.5 font-semibold text-[13px]">
        Name
        <input
          name="name"
          required
          className={inputClasses}
          placeholder="Max Mustermann"
        />
      </label>
      <label className="flex flex-col gap-1.5 font-semibold text-[13px]">
        Betrieb / Verein
        <input
          name="betrieb"
          className={inputClasses}
          placeholder="Gasthof, Verein, Brauerei …"
        />
      </label>
      <label className="flex flex-col gap-1.5 font-semibold text-[13px]">
        Telefon
        <input
          name="telefon"
          type="tel"
          required
          className={inputClasses}
          placeholder="Für den Rückruf"
        />
      </label>
      <label className="flex flex-col gap-1.5 font-semibold text-[13px]">
        Anliegen
        <select name="anliegen" className={inputClasses}>
          <option>Wartung / DGUV-Prüfung</option>
          <option>Reparatur / Notdienst</option>
          <option>Verleih Kühlanhänger / Ausschankwagen</option>
          <option>Festbedarf / Planung</option>
          <option>Sonstiges</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 font-semibold text-[13px]">
        Nachricht
        <textarea
          name="nachricht"
          rows={4}
          className={`${inputClasses} resize-y`}
          placeholder="Kurz Ihr Anliegen – z. B. Anlage, Termin, Festgröße"
        />
      </label>
      <button
        type="submit"
        className="bg-brass hover:bg-brass-light text-ink font-semibold text-base p-[15px] rounded-md cursor-pointer transition-colors"
      >
        Anfrage absenden
      </button>
      <div className="text-xs leading-normal text-steel">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur
        Bearbeitung der Anfrage zu.
      </div>
    </form>
  );
}
