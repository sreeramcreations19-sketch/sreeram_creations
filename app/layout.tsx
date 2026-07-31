import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sreeramcreations.com"),
  title: {
    default: "Sreeram Creations | Luxury Wedding Photography & Cinematography",
    template: "%s | Sreeram Creations",
  },
  description:
    "Sreeram Creations is a luxury wedding photography and cinematography studio specializing in high-end wedding storytelling, pre-wedding editorials, destination shoots, maternity fine art, and corporate event coverage in South India.",
  keywords: [
    "Luxury Wedding Photography",
    "Wedding Cinematography",
    "Pre-Wedding Photography",
    "Fine Art Photography",
    "Destination Wedding Photography",
    "Sreeram Creations",
    "South India Wedding Photographer",
    "Luxury Photography Studio",
    "Wedding Videography",
    "Corporate Event Photography",
  ],
  applicationName: "Sreeram Creations",
  authors: [{ name: "Sreeram Creations" }],
  creator: "Sreeram Creations",
  publisher: "Sreeram Creations",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sreeram Creations | Luxury Wedding Photography & Cinematography",
    description:
      "Luxury wedding photography, pre-wedding editorials, destination shoots, and cinematic storytelling by Sreeram Creations.",
    siteName: "Sreeram Creations",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreeram Creations | Luxury Wedding Photography & Cinematography",
    description:
      "Fine-art wedding photography and cinematography with a luxury editorial aesthetic.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body className="min-h-full flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#fedb98] selection:text-[#261a00]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
