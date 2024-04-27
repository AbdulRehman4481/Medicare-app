import Image from "next/image";
import "./ForgatPasswordStyle.css";
import Link from "next/link";
import Input from "@/(components)/input/input";
import Images from "@/constant/Image";
export default function ForgatPassword() {
  return (
    <>
      <div className="forgatDiv">
        <div className="fromDiv">
          <h1 className="mainHeading">Forgat Password</h1>
          <form>
            <label htmlFor="">Email</label>
            <Input type="email" place="Email" />
            <div className="linkDiv">
              <Link href={"signUp"} className="signUpLink">
                I Do't Have An Account <u>Sign Up</u>{" "}
              </Link>
            </div>
            <button className="finishBtn">Submit</button>
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
