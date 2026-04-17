import type { Metadata } from "next";
import { Space_Grotesk, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { business } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito-var",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  authors: [{ name: "JxB", url: "https://meetmister.black" }],
  title: {
    default: "Heather's Happy Houndz | Boutique Dog Grooming in Cohoes, NY",
    template: "%s | Heather's Happy Houndz",
  },
  description:
    "Boutique, one-on-one dog grooming in Cohoes, NY with a calm, personalized experience for dogs who deserve more than a rushed salon visit.",
  openGraph: {
    title: business.name,
    description: business.tagline,
    type: "website",
    siteName: business.name,
    images: [
      {
        url: "/images/heather-with-dogs.jpg",
        width: 720,
        height: 720,
        alt: "Heather with two dogs from Heather's Happy Houndz",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: "#FFF9F0", color: "#1A1A1A" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
