import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./[locale]/globals.css";
import NavBarServer from "@/components/NavBarServer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eternal Sky Tour",
  description: "Best",
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang={locale}>
      <body>
        <NavBarServer/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

/*
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => children;

export default RootLayout;
*/
