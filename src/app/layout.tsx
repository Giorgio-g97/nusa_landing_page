import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Yellowtail } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsappBtn from "@/components/WhatsappBtn";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const pacifico = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: { default: "NUSA Creazioni", template: "%s | NUSA Creazioni" },
  description:
    "Creazioni uniche in legno massello, realizzate a mano da artigiani italiani. Personalizza il tuo oggetto in base all'evento: dai matrimoni ai battesimi.",
  keywords:
    "artigianato legno, oggetti legno personalizzati, mobili su misura, arredamento legno massello, regali personalizzati legno",

    openGraph: {
      type: 'website',
      title: "NUSA Creazioni | Creazioni artigianali in legno",
      description: "Creazioni uniche in legno massello, realizzate a mano da artigiani italiani. Personalizza il tuo oggetto in base all'evento: dai matrimoni ai battesimi.",
      url: '/',
      siteName: "NUSA Creazioni",
      locale: 'it_IT',
      images: [
        {
          url: '/Homepage/logo.jpg',
          width: 1200,
          height: 630,
          alt: "logo NUSA Creazioni"
        }
      ]
    },
   

  // Istruzioni per i bot dei motori di ricerca
  robots: {
    index: true, // Permette indicizzazione
    follow: true, // Permette di seguire i link
    googleBot: {
      // Specifiche per Google
      "max-image-preview": "large", // Preview immagini grandi
    },
  },
// Icone
  icons: {
    icon: [  // Favicon standard
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' }
    ],
    apple: [{ url: '/apple-icon.png' }],  // Per dispositivi Apple
}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${pacifico.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster richColors />
        <WhatsappBtn />
        <Footer />
      </body>
    </html>
  );
}
