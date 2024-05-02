import { showToast } from "@/(components)/toast/Toast";
import axios from "axios";
import { useState } from "react";

export default function useForgatPassword() {
  const [email, setEmail] = useState("");
  const [getOtp, setGetOtp] = useState(false);
  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (!email) {
      return showToast("Please enter your email address", "error");
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID || "",
      template_params: {
        to_email: email,
        to_name: "Abdul Rehman",
        from_name: "Medicare",
        user_email: email,
        otp: otp,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      setGetOtp(true)
      setEmail("")
      console.log(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return { email, setEmail, sendEmail ,getOtp};
}
