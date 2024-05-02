"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Sidebar.css";
import {
  Analytics,
  Calender,
  Dashboard,
  Help,
  Patients,
  Settings,
  Task,
} from "@/constant/SvgImages";
export default function SideBar() {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <h1 className="menu">MENU</h1>
      <div className="sidebarFirst">
        <div className="sidebarDiv">
          <Link
            href={"/"}
            className={`linkDiv ${activeLink === "/" ? "active" : "linkDiv"}`}
            onClick={() => handleSetActiveLink("/")}
          >
            <Dashboard color={activeLink === "/" ? "blue" : "white"} />
            <span>Dashboard</span>
          </Link>
        </div>
        <div className="sidebarDiv">
          <Link
            href={"schedule"}
            className={`linkDiv ${
              activeLink === "/schedule" ? "active" : "linkDiv"
            }`}
            onClick={() => handleSetActiveLink("/schedule")}
          >
            <Calender color={activeLink === "/schedule" ? "blue" : "white"} />
            <span>Schedule</span>
          </Link>
        </div>
        <div className="sidebarDiv">
          <Link
            href={"task"}
            className={`linkDiv ${
              activeLink === "/task" ? "active" : "linkDiv"
            }`}
            onClick={() => handleSetActiveLink("/task")}
          >
              <Task color={activeLink === "/task" ? "blue" : "white"} />
            <span>
            Task
            </span>
          </Link>
        </div>
        <div className="sidebarDiv">
          <Link
            href={"patients"}
            className={`linkDiv ${
              activeLink === "/patients" ? "active" : "linkDiv"
            }`}
            onClick={() => handleSetActiveLink("/patients")}
          >
              <Patients color={activeLink === "/patients" ? "blue" : "white"} />
            <span>
            Patients
            </span>
          </Link>
        </div>
        <div className="sidebarDiv">
          <Link
            href={"analytics"}
            className={`linkDiv ${
              activeLink === "/analytics" ? "active" : "linkDiv"
            }`}
            onClick={() => handleSetActiveLink("/analytics")}
          >
              <Analytics
                color={activeLink === "/analytics" ? "blue" : "white"}
                />
                <span>
              Analytics
            </span>
          </Link>
        </div>
      </div>
      <hr />
      <h1>GENERAL</h1>
      <div className="sidebarDiv">
        <Link
          href={"settings"}
          className={`linkDiv ${
            activeLink === "/settings" ? "active" : "linkDiv"
          }`}
          onClick={() => handleSetActiveLink("/settings")}
        >
            <Settings color={activeLink === "/settings" ? "blue" : "white"} />
          <span>
          Settings
          </span>
        </Link>
      </div>
      <div className="sidebarDiv">
        <Link
          href={"support"}
          className={`linkDiv ${
            activeLink === "/support" ? "active" : "linkDiv"
          }`}
          onClick={() => handleSetActiveLink("/support")}
        >
            <Help color={activeLink === "/support" ? "blue" : "white"} />
          <span>
          Support
          </span>
        </Link>
      </div>
    </div>
  );
}
