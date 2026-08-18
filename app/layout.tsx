import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { PageLoader } from "./components/PageLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philipps Schankanlagenservice – Service, Wartung & Verleih in Franken",
  description:
    "Schankanlagen-Service, Wartung & DGUV-Prüfung für Gastronomie und Feste in Franken. Kühlanhänger- und Ausschankwagenverleih, Festbedarf, 24/7 Notdienst.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
