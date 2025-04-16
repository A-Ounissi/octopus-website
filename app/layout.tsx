import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Octopus",
  description: "Your AI Agency for Agents, Automations, and Everything Octo.",
  icons: {
    icon: "/octo-logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}