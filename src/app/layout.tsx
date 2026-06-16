import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BASQOR | بسكور - كل قطعة. كل مكان. بثقة.",
  description: "منصة السيارات وقطع الغيار الرائدة في المملكة العربية السعودية - سوق متكامل B2B2C",
  keywords: ["سيارات", "قطع غيار", "السعودية", "BASQOR", "بسكور", "ورشة", "SOS", "تشاليح"],
  authors: [{ name: "BASQOR Team" }],
  creator: "BASQOR",
  publisher: "BASQOR",
  metadataBase: new URL("https://basqor.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://basqor.pages.dev",
    title: "BASQOR | بسكور - كل قطعة. كل مكان. بثقة.",
    description: "منصة السيارات وقطع الغيار الرائدة في المملكة العربية السعودية",
    siteName: "BASQOR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BASQOR | بسكور",
    description: "منصة السيارات وقطع الغيار الرائدة في السعودية",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="min-h-screen bg-dark-950 text-white font-arabic antialiased">
        {children}
      </body>
    </html>
  );
}
