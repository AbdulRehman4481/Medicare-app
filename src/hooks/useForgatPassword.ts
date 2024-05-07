import { showToast } from "@/(components)/toast/Toast";
import { fetchUser } from "@/store/reducer/userFetchReducer";
import { RootState } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import instance from "@/utilites/Instance";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
type Change = {
  target: {
    name: string;
    value: string;
  };
};

interface UserData {
  id: string;
  email: string;
  otp: number;
  otpExpiry: Date;
}

export default function useForgatPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState("");
  const [getOtp, setGetOtp] = useState(false);
  const otp = Math.floor(100000 + Math.random() * 900000);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID || "",
      template_params: {
        to_email: email,
        to_name: email,
        from_name: "Medicare",
        user_email: email,
        otp: otp,
      },
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      localStorage.setItem("otpData", JSON.stringify({ email: email, otp }));
      setGetOtp(true);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const otpValue = localStorage.getItem("otpData");
    if (otpValue !== null) {
      const parsedOtp = JSON.parse(otpValue);
      if (parsedOtp) {
        setVerifyOtp(parsedOtp);
      }
    }
  }, [getOtp]);
  const handleOtpSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      if (!verifyOtp || verifyOtp == "") {
        showToast("OTP Expired","error")
        console.log("OTP Expired");
        return;
      }
      
      const matchOtp = verifyOtp.otp == otpValue;
      
      if (!matchOtp) {
        showToast("OTP not matched","error")
        console.log("OTP not matched");
        return;
      }
      setIsLoading(false);
      router.push("/auth/updatePassword");
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(function () {
      localStorage.removeItem("otpData");
    }, 120 * 1000);
  }, [otp]);

  return {
    email,
    handleOtpSubmit,
    setEmail,
    getOtp,
    setOtpValue,
    setVerifyOtp,
    handleSubmit,
    isLoading
  };
}
