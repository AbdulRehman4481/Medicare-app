"use client";
import Image from "next/image";
import "./RestPasswordStyle.css";
import Link from "next/link";
import Input from "@/(components)/input/input";
import Images from "@/constant/Image";
import useChangePassword from "@/hooks/useChangePassword";

// type Change = {
//   target: {
//     name: string;
//     value: string;
//   };
// };
export default function ChangePassword() {
  const { handleChangePassword, handleChange }=useChangePassword()
  // const [oldPassword, setOldPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const currentUser = useSession();
  // const currentUserEmail = currentUser.data?.user?.email;
  // const handleChange = (e: Change) => {
  //   const { name, value } = e.target;
  //   if (name === "oldPassword") setOldPassword(value);
  //   else if (name === "newPassword") setNewPassword(value);
  //   else if (name === "confirmPassword") setConfirmPassword(value);
  // };

  // const handleChangePassword = async (e: any) => {
  //   e.preventDefault();
  //   console.log(oldPassword, newPassword);
  //   if (!oldPassword || !newPassword || !confirmPassword) {
  //     alert("Please fill in all fields.");
  //     return;
  //   }
  //   if (newPassword !== confirmPassword) {
  //     alert("New password and confirm password do not match.");
  //     return;
  //   }
  //   try {
  //     const response = await fetch("http://localhost:3000/api/changePassword", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: currentUserEmail,
  //         oldPassword,
  //         newPassword,
  //       }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to change password.");
  //     }
  //     console.log("Password changed successfully.");
  //   } catch (error) {
  //     console.error("Error changing password:", error);
  //     alert("Failed to change password. Please try again later.");
  //   }
  // };

  return (
    <>
      <div className="restDiv">
        <div className="fromDiv">
          <h1 className="mainHeading">Rest Password</h1>
          <form>
            <label htmlFor="">Old Password</label>
            <Input
              type="password"
              place="Old Password"
              name="oldPassword"
              onChange={handleChange}
            />
            <label htmlFor="">New Password</label>
            <Input
              type="password"
              place="New Password"
              name="newPassword"
              onChange={handleChange}
            />
            <label htmlFor="">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              place="Confirm Password"
              onChange={handleChange}
            />
            <div className="linkDiv">
              <Link href={"signUp"} className="signUpLink">
                I Do't Have An Account <u>Sign Up</u>{" "}
              </Link>
              <Link href={"forgatPassword"} className="signInLink">
                Forgat Password
              </Link>
            </div>
            <button className="finishBtn" onClick={handleChangePassword}>
              Change Password
            </button>
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
