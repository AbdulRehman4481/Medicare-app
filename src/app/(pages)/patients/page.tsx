"use client";
import React from "react";
import "./PatientsStyle.css";
import Image from "next/image";
import Images from "@//constant/Image";
import AddPatient from "@/(components)/addPatient/AddPatient";
import {
  getStatusColor,
  getStatusTextColor,
} from "@/(components)/statusColor/statusColor";
import usePatients from "@/hooks/usePatients";
import DropDown from "@/(components)/dropDown/DropDown";

export default function Patients() {
  const {
    setCurrentPage,
    totalPages,
    currentPage,
    setShowAddPatient,
    showAddPatient,
    patientsData,
    prevPage,
    nextPage,
    paginate,
    toggleAddPatient,
    currentPatients,
  } = usePatients();
  return (
    <div className="patientDiv">
      <div>
        <h1 className="patientHeading">Patient register</h1>
      </div>
      {showAddPatient ? (
        <AddPatient 
        showPatient={setShowAddPatient}
         />
      ) : (
        <>
          <div className="secondDiv">
            <div>
              <h1 className="totalPatients">
                Total Patients ({patientsData.length})
              </h1>
            </div>
            <div className="iconsDiv">
              <div className="iconDiv" onClick={toggleAddPatient}>
                <Image
                  src={Images.pluseBlackIcon}
                  width={17.54}
                  height={17.54}
                  alt="threeDotIcon"
                />
              </div>
              <div className="iconDiv">
                <Image
                  src={Images.searchIcon}
                  width={17.54}
                  height={17.54}
                  alt="threeDotIcon"
                />
              </div>
              <div className="iconDiv">
                <Image
                  src={Images.filterIcon}
                  width={17.54}
                  height={17.54}
                  alt="threeDotIcon"
                />
              </div>
              <div className="iconDiv">
                <Image
                  src={Images.clarityIcon}
                  width={17.54}
                  height={17.54}
                  alt="threeDotIcon"
                />
              </div>
            </div>
          </div>

          <div className="tableDiv">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Diagnosis</th>
                  <th>Status</th>
                  <th>Last Appointment</th>
                  <th>Next appointment</th>
                  <th className="optionsTh">Options</th>
                </tr>
              </thead>
              <tbody>
                {currentPatients?.map((patient, index) => (
                  <tr key={index}>
                    <td className="name1">{patient?.foreName}</td>
                    <td className="name">{patient?.diagnosis}</td>
                    <td className="statusTd">
                      <div
                        className="status"
                        style={{
                          backgroundColor: getStatusColor(patient.status),
                          color: getStatusTextColor(patient.status),
                        }}
                        id="status"
                      >
                        {patient?.status}
                      </div>
                    </td>
                    <td>22/22/22</td>
                    <td>23/23/23</td>
                    <td className="threeDot">
                      <DropDown id={patient.id} setShow={setShowAddPatient} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              &#8249; Pre
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </span>
            ))}
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next &#8250;
            </button>
          </div>
        </>
      )}
    </div>
  );
}
