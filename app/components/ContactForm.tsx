"use client";

import { useEffect, useRef, useState } from "react";

const inputClasses =
  "border border-line rounded-md px-3.5 py-3 text-[15px] font-normal text-ink bg-white";

const anliegenOptions = [
  "Wartung / DGUV-Prüfung",
  "Reparatur / Notdienst",
  "Verleih Kühlanhänger / Ausschankwagen",
  "Festbedarf / Planung",
  "Sonstiges",
];

function AnliegenSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [focused, setFocused] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onOutside = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onOutside);
    return () => document.removeEventListener("pointerdown", onOutside);
  }, [open]);

  const choose = (i: number) => {
    setSelected(i);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const dir = e.key === "ArrowDown" ? 1 : -1;
      if (!open) {
        setOpen(true);
        setFocused(selected);
      } else {
        setFocused(
          (f) => (f + dir + anliegenOptions.length) % anliegenOptions.length
        );
      }
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (open) {
        choose(focused);
      } else {
        setOpen(true);
        setFocused(selected);
      }
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name="anliegen" value={anliegenOptions[selected]} />
      <button
        type="button"
        onClick={() => {
          setFocused(selected);
          setOpen(!open);
        }}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${inputClasses} w-full flex items-center justify-between gap-3 text-left cursor-pointer transition-colors ${
          open ? "border-brass" : "hover:border-brass"
        }`}
      >
        <span className="truncate">{anliegenOptions[selected]}</span>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="#C58B3F"
          strokeWidth="2.5"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute z-20 top-full left-0 right-0 mt-1.5 bg-white border border-line rounded-md shadow-[0_10px_30px_rgba(27,31,35,0.14)] overflow-hidden py-1.5"
        >
          {anliegenOptions.map((opt, i) => (
            <li key={opt} role="option" aria-selected={i === selected}>
              <button
                type="button"
                onClick={() => choose(i)}
                onMouseEnter={() => setFocused(i)}
                className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 text-left text-[15px] cursor-pointer transition-colors ${
                  i === focused ? "bg-cream" : "bg-white"
                } ${i === selected ? "font-semibold text-ink" : "font-normal text-ink"}`}
              >
                <span className="truncate">{opt}</span>
                {i === selected && (
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#C58B3F"
                    strokeWidth="2.5"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

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
      <div className="flex flex-col gap-1.5 font-semibold text-[13px]">
        Anliegen
        <AnliegenSelect />
      </div>
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
