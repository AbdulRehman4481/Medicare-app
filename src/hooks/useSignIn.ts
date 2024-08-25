import { showToast } from "@/(components)/toast/Toast";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Change, UserData } from "../constant/Types";

export default function useSignIn() {
  const router = useRouter();
  const [state, setState] = useState({ email: "", password: "" });
  const [isLoading,setIsLoading] = useState(false)
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true)
      const login = await signIn("credentials", {
        ...state,
        redirect: false,
      });
      if (login?.ok) {
        showToast("Your Login successful", "success");
        setIsLoading(false)
        router.push("/");
      } else if (login?.error) {
        showToast("Your Email or Password not valid", "error");
      }
    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false)
    }
  };

  return { handleSubmit, handleChange ,isLoading,setIsLoading};
}
