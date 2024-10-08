import type { Metadata } from "next";
import Header from "./_components/Header";
import { Fjalla_One, News_Cycle, Poiret_One } from "next/font/google";
import "./globals.css";

const rubik = News_Cycle({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Jaskaran Singh",
  description: "My portfolio",
  icons: {
    icon: "/black-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
