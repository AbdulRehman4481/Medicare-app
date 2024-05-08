import { showToast } from "@/(components)/toast/Toast";
import { Change } from "../constant/Types";
import { useSession } from "next-auth/react";
import { useState } from "react";


export default function useChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const currentUser = useSession();
  const currentUserEmail = currentUser.data?.user?.email;
  const handleChange = (e: Change) => {
    const { name, value } = e.target;
    if (name === "oldPassword") setOldPassword(value);
    else if (name === "newPassword") setNewPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleChangePassword = async (e: any) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/changePassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentUserEmail,
          oldPassword,
          newPassword,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to change password.");
      }
      showToast("Password changed","success")
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Failed to change password. Please try again later.");
    }
  };

  return { handleChangePassword, handleChange };
}
