import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CivitasAI — AI Engineering Consulting | Transform How Your Team Builds Software",
    template: "%s | CivitasAI",
  },
  description:
    "We help engineering teams adopt AI-native development workflows — shipping faster, with higher quality, and fewer engineers.",
  metadataBase: new URL("https://civitasai.co"),
  openGraph: {
    title: "CivitasAI — AI Engineering Consulting",
    description:
      "We help engineering teams adopt AI-native development workflows — shipping faster, with higher quality, and fewer engineers.",
    url: "https://civitasai.co",
    siteName: "CivitasAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CivitasAI — AI Engineering Consulting",
    description:
      "We help engineering teams adopt AI-native development workflows — shipping faster, with higher quality, and fewer engineers.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('dark')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "CivitasAI",
                  url: "https://civitasai.co",
                  email: "vlad@civitasai.co",
                  description:
                    "AI engineering consulting — helping teams adopt AI-native development workflows.",
                  founder: {
                    "@type": "Person",
                    name: "Vlad Kost",
                    jobTitle: "Founder & Principal Consultant",
                  },
                  sameAs: ["https://www.linkedin.com/in/ligren/"],
                },
                {
                  "@type": "LocalBusiness",
                  name: "CivitasAI",
                  url: "https://civitasai.co",
                  email: "vlad@civitasai.co",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Denver",
                    addressRegion: "CO",
                    addressCountry: "US",
                  },
                  priceRange: "$$$$",
                  description:
                    "AI engineering consulting for software teams.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
