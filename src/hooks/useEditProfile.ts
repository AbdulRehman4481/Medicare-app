import { showToast } from "@/(components)/toast/Toast";
import { Change } from "@/constant/Types";
import { fetchUser } from "@/store/reducer/userFetchReducer";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
interface UserData {
  id: string;
  fullName: string;
  email: string;
  password: string;
  companyName: string;
  employees: string;
}

const initialData = {
  fullName: "",
  email: "",
  password: "",
  companyName: "",
  employees: "",
};

export default function useEditProfile() {
  const [state, setState] = useState(initialData);
const [isLoading,setIsLoading] = useState(false)
  const data = useSession();
  const currentUser = data.data?.user?.email;
  const userData = useAppSelector((state) => state.user.userData) as UserData[];
  const dispatch = useAppDispatch();
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    const user = userData.find((user: UserData) => user.email === currentUser);
    if (user) {
      setState(user);
    }
  }, [userData, currentUser]);

  const handleUpdate = async () => {
    try {
      setIsLoading(true)
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        ...state,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
      };

      await fetch("http://localhost:3000/api/register", requestOptions);
      showToast("Account successFully Updated", "success");
    } catch (error) {
      showToast("Something Wrong While Update Profile ", "error");
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { handleUpdate, handleChange, state, setState,isLoading };
}
