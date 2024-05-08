import React, { ChangeEvent, useEffect, useState } from "react";
import "./EditProfileFromStyle.css";
import Input from "../input/input";
import Image from "next/image";
import Images from "../../constant/Image";
import useEditProfile from "@/hooks/useEditProfile";
import { EditProfileFormProps } from "../../constant/Types";



const EditProfileFrom: React.FC<EditProfileFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { handleUpdate, handleChange, state, isLoading } = useEditProfile();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="headDiv">
          <h2 className="mainHeading"> Your Profile</h2>
          <span className="cross" onClick={onClose}>
            &#10006;
          </span>
        </div>
        <div className="contentDiv">
          <div className="logoDiv">
            <Image
              src={Images.mainHeading}
              width={50}
              height={50}
              alt="mainHeading"
            />
            <span className="medicareHeading">Medicare </span>
          </div>
          <div>
            <div className="userDiv">
              <span className="userBorder">
                <Image
                  src={Images.blueUser}
                  width={50}
                  height={50}
                  alt="blueUser"
                  className="blueUser"
                />
              </span>
              <h2>Update Your Info </h2>
            </div>
            <label htmlFor="">Email</label>
            <Input
              type="email"
              place="Email"
              name="email"
              value={state?.email}
              onChange={handleChange}
            />
            <label htmlFor="">Name</label>
            <Input
              type="text"
              place="Full Name"
              name="fullName"
              value={state?.fullName}
              onChange={handleChange}
            />
            <label htmlFor="">Company Name</label>
            <Input
              type="text"
              place="Company Name"
              name="companyName"
              value={state?.companyName}
              onChange={handleChange}
            />
            <label htmlFor="">Employees</label>
            <Input
              type="text"
              place="Employee"
              name="employees"
              value={state?.employees}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btns">
          <button className="saveBtn" onClick={handleUpdate}>
            {isLoading ? "....loading" : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileFrom;
