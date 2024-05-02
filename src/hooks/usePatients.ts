import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { fetchPatient } from "@/store/reducer/patientFetchReducer";
import { RootState } from "@/store/store";
import { PatientDataType } from "@/constant/Types";
export default function usePatients() {
  const patientsData: PatientDataType[] = useAppSelector(
    (state: RootState) => state.patient.patientData
  );
  const [showAddPatient, setShowAddPatient] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPatient());
  }, []);

  const toggleAddPatient = () => {
    setShowAddPatient(!showAddPatient);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;
  const totalPages = Math.ceil(patientsData?.length / patientsPerPage);

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patientsData?.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
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
  };
}
