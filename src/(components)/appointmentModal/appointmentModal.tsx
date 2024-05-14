import React, { ChangeEvent, useEffect, useState } from "react";
import "./Modal.css";
import Image from "next/image";
import Images from "../../constant/Image";
import { showToast } from "../toast/Toast";
import dayjs from "dayjs";
import { Change } from "../../constant/Types";

const initialData = {
  patientName: "",
  purpose: "",
  status: "",
  duration: "",
  type: "",
  consultation: "",
  dateTime: new Date(),
};

const AppointmentModal = ({ isOpen, onClose, editAppointmentData }: any) => {
  // Moved hooks to the top level
  const [updateAppointment, setUpdateAppointment] = useState(false);
  const [appointmentData, setAppointmentData] = useState(initialData);

  useEffect(() => {
    if (editAppointmentData) {
      setAppointmentData(editAppointmentData);
      setUpdateAppointment(true);
    }
  }, [editAppointmentData]);

  if (!isOpen) return null;

  const handleChange = (e: Change) =>
    setAppointmentData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleConfirmation = (status: string) => {
    setAppointmentData((prevData) => ({ ...prevData, status }));
  };

  const handleDuration = (duration: string) => {
    setAppointmentData((prevData) => ({ ...prevData, duration }));
  };

  const handleType = (type: string) => {
    setAppointmentData((prevData) => ({ ...prevData, type }));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateTimeString = e.target.value;
    const dateTime = new Date(dateTimeString);
    setAppointmentData((prevData) => ({ ...prevData, dateTime }));
  };

  const handleConsultation = (consultation: string) => {
    setAppointmentData((prevData) => ({ ...prevData, consultation }));
  };

  const handleAppointment = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        ...appointmentData,
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
      await fetch("http://localhost:3000/api/appointment", requestOptions);
      showToast("success", "Successfully created");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEditAppointment = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        id: editAppointmentData.id,
        ...appointmentData,
      });
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
      };
      await fetch(`http://localhost:3000/api/appointment`, requestOptions);
      showToast("success", "Successfully Updated");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="headDiv">
          <h2 className="mainHeading">New Appointment</h2>
          <span className="cross" onClick={onClose}>
            &#10006;
          </span>
        </div>
        <div className="firstDiv">
          <div className="innerDivUser">
            <Image
              src={Images.blueUser}
              height={24}
              width={24}
              alt="blueUser"
            />
            <h1>PRACTITIONER</h1>
            <h2>John Doe </h2>
            <h3>General Doctor</h3>
          </div>
          <div className="innerDivClock">
            <Image
              src={Images.clockTime}
              height={24}
              width={24}
              alt="blueUser"
            />
            <h1>DATE AND TIME</h1>
            <h2>
              {dayjs(appointmentData?.dateTime).format("MM DD, YYYY")}
            </h2>
            <h3>{dayjs(appointmentData?.dateTime).format("HH:mm")}</h3>
            <h4>Change</h4>
            <input
              type="datetime-local"
              className="dateTimeInput"
              name="dateTime"
              onChange={handleDateChange}
              style={{
                width: "40px",
                position: "relative",
                bottom: "20px",
                opacity: 0,
              }}
            />
          </div>
          <div className="innerDivLocation">
            <Image
              src={Images.fluentLocation}
              height={24}
              width={24}
              alt="blueUser"
            />
            <h1>LOCATION</h1>
            <h2>General clinic</h2>
            <h3>Room 1</h3>
            <h4>change</h4>
          </div>
        </div>
        <div className="fromPatient">
          <div className="fromLabels">
            <h5 className="patientLabel">Patient</h5>
            <h5 className="purposeLabel">Purpose of visit</h5>
            <h5 className="appointmentLabel">Appointment Status</h5>
            <h5>Duration</h5>
            <h5>Appointment type</h5>
            <h5>Online consultation</h5>
          </div>
          <div className="inputDiv">
            <div>
              <input
                type="text"
                className="inputzz"
                name="patientName"
                value={appointmentData?.patientName}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="purpose"
                onChange={handleChange}
                value={appointmentData.purpose}
              ></textarea>
            </div>
            <div>
              <button
                className={`confirmBtn ${
                  appointmentData.status === "Confirmation required"
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleConfirmation("Confirmation required")}
              >
                Confirmation required
              </button>
              <button
                className={`confirmBtn ${
                  appointmentData.status === "Confirmed" ? "selected" : ""
                }`}
                onClick={() => handleConfirmation("Confirmed")}
              >
                Confirmed
              </button>
            </div>
            <div>
              <button
                className={`timeBtns ${
                  appointmentData.duration === "10" ? "selected" : ""
                }`}
                onClick={() => handleDuration("10")}
              >
                10&apos;
              </button>
              <button
                className={`timeBtns ${
                  appointmentData.duration === "30" ? "selected" : ""
                }`}
                onClick={() => handleDuration("30")}
              >
                30&apos;
              </button>
              <button
                className={`timeBtns ${
                  appointmentData.duration === "45" ? "selected" : ""
                }`}
                onClick={() => handleDuration("45")}
              >
                45&apos;
              </button>
              <button
                className={`timeBtns ${
                  appointmentData.duration === "60" ? "selected" : ""
                }`}
                onClick={() => handleDuration("60")}
              >
                60&apos;
              </button>
              <button
                className={`timeBtns ${
                  appointmentData.duration === "90" ? "selected" : ""
                }`}
                onClick={() => handleDuration("90")}
              >
                90&apos;
              </button>
              <button
                className={`timeBtns ${
                  appointmentData.duration === "120" ? "selected" : ""
                }`}
                onClick={() => handleDuration("120")}
              >
                120&apos;
              </button>
            </div>
            <div>
              <button
                className={`followBtn ${
                  appointmentData.type === "First time" ? "selected" : ""
                }`}
                onClick={() => handleType("First time")}
              >
                First time
              </button>
              <button
                className={`followBtn ${
                  appointmentData.type === "Follow up visit" ? "selected" : ""
                }`}
                onClick={() => handleType("Follow up visit")}
              >
                Follow up visit
              </button>
            </div>
            <div>
              <button
                className={`onlineBtn ${
                  appointmentData.consultation === "No" ? "selected" : ""
                }`}
                onClick={() => {
                  handleConsultation("No");
                }}
              >
                No
              </button>
              <button
                className={`onlineBtn ${
                  appointmentData.consultation === "Yes" ? "selected" : ""
                }`}
                onClick={() => {
                  handleConsultation("Yes");
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
        <div className="notifyDiv">
          <Image
            src={Images.notifyIcon}
            height={22.5}
            width={25}
            alt="notifyIcon"
          />
          <span className="notifyHeading">Send notifications</span>
        </div>
        <p className="paraAppointment">
          Appointment confirmation and reminder messages will be automatically
          sent to clinic SMS
          <br /> notification settings.
        </p>
        <div className="btns">
          <button className="cancelBtn" onClick={onClose}>
            Cancel
          </button>
          <button className="appointmentBtn">Begin Appointment</button>
          {updateAppointment ? (
            <button className="saveBtn" onClick={handleEditAppointment}>
              Update
            </button>
          ) : (
            <button className="saveBtn" onClick={handleAppointment}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
