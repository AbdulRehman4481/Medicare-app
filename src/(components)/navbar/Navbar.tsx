"use client"
import React from "react";
import "./NavbarStyle.css";
import Image from "next/image";
import Images from "@/constant/Image";
import { signOut } from "next-auth/react";
export default function Navbar() {
  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();

  return (
    <nav className="nav">
      <div id="navFirst">
        <div id="navSecond">
          <Image
            src={Images.mainHeading}
            width={47.07}
            height={47.07}
            alt="Picture of the author"
            style={{ marginBottom: "10px" }}
          />
          <h1 id="mainHeading">Medicare</h1>
        </div>
        <div className="hr" />
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <Image
            src={Images.threeLine}
            width={20}
            height={20}
            alt="threeLine"
          />
        </label>
        <div id="ulDiv">
          <div id="liDiv">
            <div id="searchDiv">
              <input type="text" placeholder="search" id="search" />
              <Image
                src={Images.searchIcon}
                width={18.63}
                height={18.63}
                alt="searchIcon"
                id="searchIcon"
              />
            </div>
          </div>
          <div id="liDiv">
            <div id="userInfo">
              <span id="name">Abdul Rehman</span>
              <br />
              <span id="doctor">General Doctor</span>
            </div>
          </div>
          <div id="liDiv">
            <div id="dateDiv">
              <p id="date">{`${todayDate}/${todayMonth}/${todayYear}`}</p>
            </div>
          </div>
          <div id="liDiv">
            <div id="navIcons">
              <Image
                src={Images.emailIcon}
                width={20.63}
                height={18.63}
                id="notifyIcon"
                alt="searchIcon"
              />
              <Image
                src={Images.notifyIcon}
                width={18.63}
                height={18.63}
                id="notifyIcon"
                alt="searchIcon"
              />
              <div onClick={() => signOut()}>
                <Image
                  src={Images.logOutIcon}
                  width={18.63}
                  height={18.63}
                  id="notifyIcon"
                  alt="searchIcon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
