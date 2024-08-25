import React from "react";
<<<<<<< HEAD
import { Mukta } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/store/Provider";
const mukta = Mukta({
=======
import { Inter, Mukta } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/store/Provider";
const inter = Inter({
>>>>>>> origin/master
  weight: ["400", "700"],
  subsets: ["latin"]
});
export const metadata: Metadata = {
  title: "Medicare",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
<<<<<<< HEAD
      <body className={mukta.className}>
=======
      <body className={inter.className}>
>>>>>>> origin/master
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
