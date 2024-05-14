import React from "react";
import { Mukta } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/store/Provider";
const mukta = Mukta({
  weight: ["400", "700"],
  subsets: ["latin"]
});
export const metadata: Metadata = {
  title: "Medicare",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body className={mukta.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
