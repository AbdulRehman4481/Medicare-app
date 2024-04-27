import { showToast } from "@/(components)/toast/Toast";
import { Change, UserData } from "@/constant/Types";
import { useState } from "react";

const initialUser: UserData = {
  fullName: "",
  email: "",
  password: "",
  companyName: "",
  employees: "",
};

export default function useSignUp() {
  const [userData, setUserData] = useState(initialUser);
  const handleChange = (e: Change) =>
    setUserData((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password,
        companyName: userData.companyName,
        employees: userData.employees,
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        
      };

      await fetch("http://localhost:3000/api/register", requestOptions);
      showToast("Account successFully Created","success")
    } catch (error) {
      console.log("error", error);
    }
  };

  return { handleSubmit, handleChange };
}
