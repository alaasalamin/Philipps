"use client";

import { useState } from "react";
import { LogoMark, LogoWordmark } from "./Logo";
import { PhoneIcon } from "./icons";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#verleih", label: "Verleih & Festbedarf" },
  { href: "#ueberuns", label: "Über uns" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink px-[clamp(16px,4vw,40px)]">
      <div className="max-w-[1200px] mx-auto flex items-center gap-4 py-3">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark size={38} />
          <LogoWordmark />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-[clamp(12px,2vw,24px)] ml-auto items-center">
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
        <div className="hidden lg:flex items-center gap-3.5 ml-auto">
          <a
            href="tel:+49155223085402"
            className="flex items-center gap-2 font-semibold text-sm text-cream hover:text-brass transition-colors"
          >
            <PhoneIcon />
            <span>01552 / 23 08 54 02</span>
          </a>
          <a
            href="#kontakt"
            className="bg-brass hover:bg-brass-light text-ink font-semibold text-[13px] px-4 py-2.5 rounded-md whitespace-nowrap transition-colors"
          >
            Notdienst / Rückruf
          </a>
        </div>

        {/* Mobile: phone + burger */}
        <div className="flex lg:hidden items-center gap-4 ml-auto">
          <a href="tel:+49155223085402" aria-label="Anrufen" className="p-1">
            <PhoneIcon size={20} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="flex flex-col justify-center gap-[5px] size-10 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-6 bg-cream rounded transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-cream rounded transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-cream rounded transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 pb-5 border-t border-cream/12 pt-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-medium text-base text-cream hover:text-brass transition-colors py-2.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 bg-brass hover:bg-brass-light text-ink font-semibold text-sm px-4 py-3 rounded-md text-center transition-colors"
          >
            Notdienst / Rückruf
          </a>
        </nav>
      </div>
    </header>
  );
}
