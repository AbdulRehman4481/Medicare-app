import React from "react";
import { Metadata } from "next";
import Navbar from "../../(components)/navbar/Navbar";
import SideBar from "../../(components)/sideBar/SideBar";
import { Provider } from "react-redux";
import store from "@/store/store";

export const metadata: Metadata = {
  title: "Medicare",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // <html>
    // <body>
    <>
      <Navbar />
      <SideBar />
      <div className="content">{children}</div>
    </>
    // </body>
    // </html>
  );
};

export default RootLayout;
