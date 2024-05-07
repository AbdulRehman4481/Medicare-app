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
  const [isLoading,setIsLoading] = useState(false)

  const handleChange = (e: Change) =>
    setUserData((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true)
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
      setIsLoading(false)
    } catch (error) {
      console.log("error", error);
    } finally{
      setIsLoading(false)
    }
  };

  return { handleSubmit, isLoading,handleChange };
}
