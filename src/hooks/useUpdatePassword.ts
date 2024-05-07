import { showToast } from "@/(components)/toast/Toast";
import { useEffect, useState } from "react";

export default function useUpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState({ email: "", otp: "" });
  useEffect(() => {
    const otpValue = localStorage.getItem("otpData");
    console.log("🚀  useEffect  otpValue:", otpValue);
    if (otpValue !== null) {
      const parsedOtp = JSON.parse(otpValue);
      if (parsedOtp) {
        setOtp(parsedOtp);
      }
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: otp.email,
        newPassword: newPassword,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
      };

      await fetch("http://localhost:3000/api/updatePassword", requestOptions);

      showToast("Password changed successfully.", "success");
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };
  return { setNewPassword, setConfirmPassword, handleSubmit };
}
