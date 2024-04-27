"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Sidebar.css";
import Images from "@/constant/Image";
export default function SideBar() {
  return (
    <div className="sidebar">
      <h1>MEUN</h1>
      <div className="sidebarFirst">
        <div className="sidebarDiv">
          <Link href={"/"} className="linkDiv ">
            <Image
              src={Images.dashIcon}
              width={19.61}
              height={19.61}
              alt="email"
              className="dashIcon"
            />
            Dashboard
          </Link>
        </div>
        <div className="sidebarDiv">
          <Link href={"schedule"} className="linkDiv">
            <Image
              src={Images.calenderIcon}
              width={19.61}
              height={19.61}
              alt="email"
            />
            Schedule
          </Link>
        </div>
        <div className="sidebarDiv">
          <Link href={"task"} className="linkDiv">
            <Image
              src={"/assets/icons/taskDone.png"}
              width={19.61}
              height={19.61}
              alt="email"
              color="red"
            />
            Task
          </Link>
        </div>
        <div className="sidebarDiv">
          <Link href={"patients"} className="linkDiv">
            <Image
              src={Images.patientIcon}
              width={19.61}
              height={19.61}
              alt="email"
            />
            Patients
          </Link>
        </div>
        <div className="sidebarDiv">
          <Link href={"analytics"} className="linkDiv">
            <Image
              src={Images.analyticsIcon}
              width={19.61}
              height={19.61}
              alt="email"
            />
            Analytics
          </Link>
        </div>
      </div>
      <hr />
      <h1>GENERAL</h1>
      <div className="sidebarDiv">
        <Link href={"settings"} className="linkDiv">
          <Image
            src={Images.settingIcon}
            width={19.61}
            height={19.61}
            alt="email"
          />
          Settings
        </Link>
      </div>
      <div className="sidebarDiv">
        <Link href={"support"} className="linkDiv">
          <Image
            src={Images.helpIcon}
            width={19.61}
            height={19.61}
            alt="email"
          />
          Support
        </Link>
      </div>
    </div>
  );
}
