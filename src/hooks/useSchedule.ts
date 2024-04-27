import  { useState } from "react";

export default function useSchedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("true")
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return { openModal,setIsModalOpen,closeModal,isModalOpen };
}
