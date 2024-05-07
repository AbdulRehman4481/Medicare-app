"use client";
import Image from "next/image";
import "./RestPasswordStyle.css";
import Input from "@/(components)/input/input";
import Images from "@/constant/Image";
import useUpdatePassword from "@/hooks/useUpdatePassword";
export default function UpdatePassword() {
  const { setNewPassword, setConfirmPassword, handleSubmit }=useUpdatePassword()
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [otp, setOtp] = useState({ email: "", otp: "" });
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   const otpValue = localStorage.getItem("otpData");
  //   console.log("🚀  useEffect  otpValue:", otpValue);
  //   if (otpValue !== null) {
  //     const parsedOtp = JSON.parse(otpValue);
  //     if (parsedOtp) {
  //       setOtp(parsedOtp);
  //     }
  //   }
  // }, []);

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   if (!newPassword || !confirmPassword) {
  //     alert("Please fill in all fields.");
  //     return;
  //   }

  //   if (newPassword !== confirmPassword) {
  //     alert("New password and confirm password do not match.");
  //     return;
  //   }

  //   try {
  //     const myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");

  //     const raw = JSON.stringify({
  //       email: otp.email,
  //       newPassword: newPassword,
  //     });

  //     const requestOptions = {
  //       method: "PUT",
  //       headers: myHeaders,
  //       body: raw,
  //     };

  //     fetch("http://localhost:3000/api/updatePassword", requestOptions)
  //       .then((response) => response.text())
  //       .then((result) => console.log(result))
  //       .catch((error) => console.error(error));

  //     console.log("Password changed successfully.");
  //     // toast.success("Password changed successfully.");
  //   } catch (error) {
  //     console.error("Error changing password:", error);
  //     // toast.error(`Error changing password: ${error}`);
  //   }
  // };

  return (
    <>
      <div className="restDiv">
        <div className="fromDiv">
          <h1 className="mainHeading">Update Password</h1>
          <form>
            <label htmlFor="">New Password</label>
            <Input
              type="password"
              place="New Password"
              name="newPassword"
              onChange={(e: any) => setNewPassword(e.target.value)}
            />
            <label htmlFor="">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              place="Confirm Password"
              onChange={(e: any) => setConfirmPassword(e.target.value)}
            />
            <button className="finishBtn"
            onClick={handleSubmit}
            >Change Password</button>
          </form>
        </div>
        <div className="secondDiv">
          <h1 className="secondHeading"> ALL IN ONE DASHBOARD</h1>
          <Image
            src={Images.loginImage}
            height={475.73}
            width={669}
            alt="loginImage"
          />
          <p className="para2">
            Keep track of all patient information in this section.
          </p>
          <button className="learnBtn">Learn More</button>
        </div>
      </div>
    </>
  );
}
