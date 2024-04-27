import React, { useEffect, useState } from "react";
import "./DropDownStyle.css";
import Image from "next/image";
import Images from "@/constant/Image";
import { PatientDataType } from "@/constant/Types";
import { RootState } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { fetchPatient } from "@/store/reducer/patientFetchReducer";
import { showToast } from "../toast/Toast";
import usePatients from "@/hooks/usePatients";

export default function DropDown({ id,setShow }: { id: string,setShow:any }) {

  const [visible, setVisible] = useState(false);
  const patientsData: PatientDataType[] = useAppSelector(
    (state: RootState) => state.patient.patientData
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPatient());
  }, []);

  const toggleDropDown = () => {
    setVisible(!visible);
  };

  const handleDelete = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        id,
      });

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
      };

      await fetch("http://localhost:3000/api/patient", requestOptions);
      showToast("Patient successfully deleted", "success");
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleEdit = () => {
    setShow(true)
    
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-toggle" onClick={toggleDropDown}>
        <Image
          src={Images.threeDotIcon}
          width={23.54}
          height={23.54}
          alt="threeDotIcon"
        />
      </div>
      {visible && (
        <div className="dropdown-content">
          <button className="dropdown-item" onClick={handleEdit}>
            <Image
              src={Images.edit}
              width={23.54}
              height={23.54}
              alt="threeDotIcon"
            />
            <span className="dropdown-label-edit">Edit</span>
          </button>
          <button className="dropdown-item" onClick={handleDelete}>
            <Image
              src={Images.delete}
              width={23.54}
              height={23.54}
              alt="threeDotIcon"
            />
            <span className="dropdown-label-delete">Delete</span>
          </button>
        </div>
      )}
    </div>
  );
}
