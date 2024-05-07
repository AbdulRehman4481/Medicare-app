"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./SettingStyle.css";
import Images from "@/constant/Image";
import EditProfileFrom from "@/(components)/editProfile/EditProfileFrom";

export default function Settings() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="mainDiv">
        <div>
          <h2>Settings</h2>
        </div>
        <div className="secondSettingsDiv">
          <h1>Settings</h1>
          <div className="clarityIcon">
            <Image
              src={Images.clarityIcon}
              height={30}
              width={30}
              alt="clarityIcon"
            />
          </div>
        </div>
        <div className="secondSettingsDiv">
          <Link href={"auth/changePassword"}>Change Password</Link>
        </div>
        <div className="secondSettingsDiv">
            <h1 onClick={openEditModal}>Edit Profile</h1>
            <div className="clarityIcon">
              <Image
                src={Images.blueUser}
                height={30}
                width={30}
                alt="clarityIcon"
              />
            </div>
        </div>
      </div>

      {isEditModalOpen && (
        <EditProfileFrom isOpen={isEditModalOpen} onClose={closeEditModal} />
      )}
    </>
  );
}
