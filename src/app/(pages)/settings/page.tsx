// import Images from "@/app/constant/Image";
import Image from "next/image";
import React from "react";
import "./SettingStyle.css";
import Link from "next/link";
import Images from "@/constant/Image";

export default function Settings() {
  return (
    <div className="mainDiv">
      <div>
        <h2>Settings</h2>
      </div>
      <div className="secondSettingsDiv">
        <h1>Settings</h1>
        <div className="clarityIcon">
          <Image src={Images.clarityIcon} height={30} width={30} alt="clarityIcon" />
        </div>
      </div>
      <div className="secondSettingsDiv">
        <Link href={"auth/changePassword"}>Change Password</Link>
      </div>
    </div>
  );
}
