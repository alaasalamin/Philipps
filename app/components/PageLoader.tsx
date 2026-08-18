"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

export function PageLoader() {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let delayTimer: ReturnType<typeof setTimeout>;
    let fadeTimer: ReturnType<typeof setTimeout>;

    const startHide = () => {
      delayTimer = setTimeout(() => {
        setFading(true);
        fadeTimer = setTimeout(() => setHidden(true), 500);
      }, 1000);
    };

    if (document.readyState === "complete") {
      startHide();
    } else {
      window.addEventListener("load", startHide);
    }
    return () => {
      window.removeEventListener("load", startHide);
      clearTimeout(delayTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-100 bg-ink flex items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-[clamp(20px,3vw,40px)] px-6 md:flex-row md:items-center">
        <div className="w-[clamp(64px,14vw,96px)] [&>svg]:w-full [&>svg]:h-auto">
          <LogoMark size={96} />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-[clamp(40px,9vw,64px)] leading-none text-cream tracking-[0.06em]">
            PHILIPPS
          </span>
          <span className="mt-2 font-semibold text-[clamp(10px,2.3vw,15px)] text-cream tracking-[0.34em]">
            SCHANKANLAGENSERVICE
          </span>
          <span className="mt-3 font-semibold text-[clamp(9px,2vw,12px)] text-brass tracking-[0.22em] whitespace-nowrap">
            - &nbsp;SERVICE&nbsp; · &nbsp;WARTUNG&nbsp; · &nbsp;VERLEIH&nbsp; -
          </span>
        </div>
      </div>
    </div>
  );
}
