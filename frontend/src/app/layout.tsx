"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import { learners } from "../data/users";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
  learner: (typeof learners)[0];
}

export default function RootLayout({
  children, learner
}: RootLayoutProps) {

  const pathname = usePathname();
  const currentLearner = learners[0];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 bg-gradient-to-br from-[#CED4DA] to-[#e3ecee] `}
      >
        <Header learner={currentLearner} currentPath={pathname} />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
