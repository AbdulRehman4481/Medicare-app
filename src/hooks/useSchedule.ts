import  { useState } from "react";

export default function useSchedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return { openModal,setIsModalOpen,closeModal,isModalOpen };
}
