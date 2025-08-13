import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
//components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";



const roboto = Roboto({
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-roboto', 
  display: 'swap', 
});


export const metadata: Metadata = {
  title: "Notehub",
  description: "An App for all your notes",
  openGraph: {
      title: "NoteHub",
      description: "An App for your notes",
      url: "https://07-routing-nextjs-cyan-eight.vercel.app/" ,
      siteName: 'NoteHub',
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/og-meta.jpg',
          width: 1200,
          height: 630,
          alt: "notehub",
        },
      ],
      type: 'article',
    },
};

export default function RootLayout({
  children, modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
        <html lang="en">
      
      <body className={roboto.variable}>

        <TanStackProvider>
      <Header/>
          {children}
          {modal}
          <Footer />
          </TanStackProvider>
      </body>
      
    </html>
  );
}
