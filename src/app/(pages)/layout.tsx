import React from "react";
import { Metadata } from "next";
import Navbar from "../../(components)/navbar/Navbar";
import SideBar from "../../(components)/sideBar/SideBar";

export const metadata: Metadata = {
  title: "Medicare",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="content">{children}</div>
    </>
  );
};

export default RootLayout;
