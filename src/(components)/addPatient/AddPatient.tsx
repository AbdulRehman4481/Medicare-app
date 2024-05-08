import React, { useEffect, useState } from "react";
import "./AddPatientsStyle.css";
import Image from "next/image";
import Images from "../../constant/Image";
import { showToast } from "../toast/Toast";
import { Change } from "../../constant/Types";
const initialData = {
  foreName: "",
  surName: "",
  gender: "",
  diagnosis: "",
  note: "",
  phoneNumber: "",
  status: "",
  dob: "",
};
export default function AddPatient({ showPatient, editPatientData }: any) {
  const [loading, setLoading] = useState(false);
  const [patientData, setPatientData] = useState(initialData);
  const [isUpdate, setIsUpdate] = useState(false);
  const handleChange = (e: Change) =>
    setPatientData((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleGenderSelect = (gender: string) => {
    setPatientData((prevData) => ({ ...prevData, gender }));
  };
  useEffect(() => {
    if (editPatientData) {
      setPatientData(editPatientData);
      setIsUpdate(true);
    }
  }, [editPatientData]);
  const handleAddPatient = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        ...patientData,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      await fetch("http://localhost:3000/api/patient", requestOptions);
      showToast("Patient successfully Added", "success");
      setPatientData(initialData);
      setLoading(false);
    } catch (error) {
      console.log("At handleAddPatient ", error);
    } finally {
      setLoading(false);
    }
  };
  const handleDate = (e: Change) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    setPatientData(initialData);
    showPatient(false);
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        id: editPatientData.id,
        ...patientData,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
      };

      await fetch("http://localhost:3000/api/patient", requestOptions);
      setPatientData(initialData);
      showToast("Patient successfully updated", "success");
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AddPatient">
      <div className="secondAddDiv">
        <h1>Add Patient</h1>
        <div>
          <button className="cancelBtn" onClick={handleCancel}>
            Cancel
          </button>
          {isUpdate ? (
            <button className="saveBtn" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button className="saveBtn" onClick={handleAddPatient}>
              Save
            </button>
          )}
        </div>
      </div>
      <div className="aboveForm">
        <div className="fromModal">
          <div className="form">
            <div className="fromLabel">
              <h1>Record Number</h1>
              <h1>Forename</h1>
              <h1>Surname</h1>
              <h1>Date of birth</h1>
              <h1>Sex</h1>
              <h1 style={{ marginTop: "30px" }}>Diagnosis</h1>
              <h1>Notes</h1>
              <h1 style={{ marginTop: "100px" }}>Phone Number</h1>
              <h1>Status</h1>
            </div>
            <div className="inputzz">
              <div className="para">
                <p>
                  Record number will be assigned automatically when you save.
                </p>
                <button className="assign">Assign manually</button>
              </div>
              <div>
                <input
                  type="text"
                  className="inputz"
                  value={patientData.foreName}
                  name="foreName"
                  onChange={handleChange}
                />
              </div>
              {/* <div>
                <input
                  type="text"
                  className="inputz"
                  name="surName"
                  value={patientData.surName}
                  onChange={handleChange}
                />
              </div> */}
              <div>
                <div className="calendarAbove">
                  <span className="calendar">
                    <Image
                      src={Images.calenderIcon}
                      height={18}
                      width={18}
                      alt="calendar"
                    />
                    </span>
                  <input
                    type="date"
                    className="calendarInput"
                    name="dob"
                    value={patientData.dob}
                    onChange={handleDate}
                  />
                </div>
              </div>
              <div>
                <button
                  className={`genderBtn ${
                    patientData.gender === "Male" ? "selected" : ""
                  }`}
                  onClick={() => handleGenderSelect("Male")}
                >
                  Male
                </button>
                <button
                  className={`genderBtn ${
                    patientData.gender === "Female" ? "selected" : ""
                  }`}
                  onClick={() => handleGenderSelect("Female")}
                >
                  Female
                </button>
              </div>
              <div>
                <input
                  type="text"
                  className="inputz"
                  value={patientData.diagnosis}
                  name="diagnosis"
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  onChange={handleChange}
                  name="note"
                  value={patientData.note}
                ></textarea>
              </div>
              <div>
              <input
                  type="number"
                  className="inputz"
                  value={patientData.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </div>
              <div>
                <select
                  className="statusDropDown"
                  value={patientData.status}
                  onChange={handleChange}
                  name="status"
                >
                  <option value="">Select Status</option>
                  <option value="Recovered">Recovered</option>
                  <option value="Awaitingsurgery">Awaiting surgery</option>
                  <option value="Ontreatment">On treatment</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
