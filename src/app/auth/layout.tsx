import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medicare",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>{children}</>
    // <html>
    //   <body>
    //   </body>
    // </html>
  );
};

export default RootLayout;
