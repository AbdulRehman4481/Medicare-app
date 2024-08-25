"use client";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./UpComingTaskStyle.css";
import Image from "next/image";
import Images from "../../constant/Image";
import AppointmentModal from "../appointmentModal/appointmentModal";
import Appointments from "../appointments/Appointments";

export default function UpcomingTask() {
  const time = ["8:00", "9:00", "10:00", "11:00"];
=======
import Image from "next/image";
import { useState } from "react";
import Images from "../../constant/Image";
import AppointmentModal from "../appointmentModal/appointmentModal";
import Appointments from "../appointments/Appointments";
import "./UpComingTaskStyle.css";

export default function UpcomingTask() {
  const time = ["08:00", "09:00", "10:00", "11:00"];
>>>>>>> origin/master
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div
<<<<<<< HEAD
          className="taskDiv"
          style={{
            display: "flex",
            marginTop: 16.5,
            marginRight: 19.2,
            marginLeft: 19.2,
          }}
        >
=======
          className="taskDiv">
>>>>>>> origin/master
          <div>
            <span className="firstHeading">Upcoming schedule</span>
          </div>
          <div>
            <span className="secondHeading">New Appointment</span>
            <div
              className="appointmentAdd"
              style={{ display: "inline" }}
              onClick={openModal}
            >
              <Image
                src={Images.pluseIcon}
                width={15.32}
                height={15.32}
                alt="pluseIcon"
              />
            </div>
          </div>
        </div>
        <div
<<<<<<< HEAD
          style={{
            marginTop: "16px",
          }}
        >
          {time?.map((value, index) => (
            <div
              style={{ display: "flex", marginLeft: 16, marginRight: 16 }}
              key={index}
            >
              <div style={{ width: 50 }}>
=======
        >
          {time?.map((value, index) => (
            <div
              style={{ display: "flex", marginLeft: 16, marginRight: 16   }}
              key={index}
            >
              <div style={{marginRight:10}}>
>>>>>>> origin/master
                <h1 className="time">{value}</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={Images.blackDot}
                  width={15}
                  height={15}
                  alt="blackDot"
                />
                <div className="verticalLine"></div>
              </div>

              <div style={{ marginTop: 10 }}>
                <Appointments value={value} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
