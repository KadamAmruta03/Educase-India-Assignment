import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupPage() {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState("yes");
  const inputBaseStyle = {
    position: "absolute",
    left: "20px",
    width: "335px",
    height: "40px",
    border: "1px solid #CBCBCB",
    borderRadius: "6px",
    background: "transparent",
    fontFamily: "Rubik",
    fontSize: "14px",
    padding: "0 17px",
    boxSizing: "border-box",
    outline: "none",
    color: "#1D2226",
    opacity: 1
  };
  const labelBgStyle = {
    position: "absolute",
    width: "96px",
    height: "17px",
    background: "#F7F8F9",
    opacity: 1,
    zIndex: 1
  };
  const labelTextStyle = {
    position: "absolute",
    height: "15px",
    textAlign: "left",
    font: "normal normal normal 13px/17px Rubik",
    letterSpacing: "0px",
    color: "#6C25FF",
    opacity: 1,
    zIndex: 2,
    whiteSpace: "nowrap"
  };
  return (
    <div style={{
      position: "relative",
      width: "375px",
      height: "812px",
      background: "#F7F8F9 0% 0% no-repeat padding-box",
      opacity: 1,
      margin: "0 auto",
      overflow: "hidden"
    }}>

      <style>{`
        input::placeholder {
          color: #1D2226;
          opacity: 1;
        }
      `}</style>
      <h1 style={{
        position: "absolute",
        top: "40px",
        left: "20px",
        width: "188px",
        height: "69px",
        textAlign: "left",
        font: "normal normal 500 28px/36px Rubik",
        letterSpacing: "0px",
        color: "#1D2226",
        opacity: 1,
        margin: 0
      }}>
        Create your PopX account
      </h1>
      <div style={{ position: "absolute", top: "131px", left: "0", width: "100%" }}>
        <span style={{ ...labelBgStyle, left: "29px" }} />
        <label style={{ ...labelTextStyle, top: "0px", left: "34px", width: "65px" }}>
          Full Name<span style={{ color: "#DD4A3D" }}>*</span>
        </label>
        <input type="text" placeholder="Marry Doe" style={{ ...inputBaseStyle, top: "9px" }} />
      </div>
      <div style={{ position: "absolute", top: "200px", left: "0", width: "100%" }}>
        <span style={{ ...labelBgStyle, left: "29px" }} />
        <label style={{ ...labelTextStyle, top: "0px", left: "34px", width: "95px" }}>
          Phone number<span style={{ color: "#DD4A3D" }}>*</span>
        </label>
        <input type="text" placeholder="Marry Doe" style={{ ...inputBaseStyle, top: "9px" }} />
      </div>
      <div style={{ position: "absolute", top: "269px", left: "0", width: "100%" }}>
        <span style={{ ...labelBgStyle, left: "29px" }} />
        <label style={{ ...labelTextStyle, top: "0px", left: "34px", width: "90px" }}>
          Email address<span style={{ color: "#DD4A3D" }}>*</span>
        </label>
        <input type="email" placeholder="Marry Doe" style={{ ...inputBaseStyle, top: "9px" }} />
      </div>
      <div style={{ position: "absolute", top: "338px", left: "0", width: "100%" }}>
        <span style={{ ...labelBgStyle, left: "29px" }} />
        <label style={{ ...labelTextStyle, top: "0px", left: "34px", width: "68px" }}>
          Password<span style={{ color: "#DD4A3D" }}> *</span>
        </label>
        <input type="password" placeholder="Marry Doe" style={{ ...inputBaseStyle, top: "9px" }} />
      </div>
      <div style={{ position: "absolute", top: "407px", left: "0", width: "100%" }}>
        <span style={{ ...labelBgStyle, left: "29px" }} />
        <label style={{ ...labelTextStyle, top: "0px", left: "34px", width: "94px" }}>
          Company name
        </label>
        <input type="text" placeholder="Marry Doe" style={{ ...inputBaseStyle, top: "9px" }} />
      </div>
      <p style={{
        position: "absolute",
        top: "474px",
        left: "20px",
        width: "200px",
        height: "15px",
        textAlign: "left",
        font: "normal normal normal 13px/17px Rubik",
        color: "#1D2226",
        opacity: 1,
        margin: 0,
        whiteSpace: "nowrap"
      }}>
        Are you an Agency?<span style={{ color: "#DD4A3D" }}>*</span>
      </p>
      <div
        onClick={() => setIsAgency("yes")}
        style={{ position: "absolute", top: "499px", left: "20px", width: "70px", height: "22px", cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <div style={{
          width: "22px",
          height: "22px",
          border: `1px solid ${isAgency === "yes" ? "#642AF5" : "#919191"}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          background: "transparent"
        }}>
          {isAgency === "yes" && <div style={{ width: "12px", height: "12px", background: "#6C25FF", borderRadius: "50%" }} />}
        </div>
        <span style={{ marginLeft: "12px", width: "23px", height: "17px", font: "normal normal normal 14px/17px Rubik", color: "#1D2226" }}>Yes</span>
      </div>
      <div
        onClick={() => setIsAgency("no")}
        style={{ position: "absolute", top: "499px", left: "100px", width: "70px", height: "22px", cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <div style={{
          width: "22px",
          height: "22px",
          border: `1px solid ${isAgency === "no" ? "#6C25FF" : "#919191"}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          background: "transparent"
        }}>
          {isAgency === "no" && <div style={{ width: "12px", height: "12px", background: "#6C25FF", borderRadius: "50%" }} />}
        </div>
        <span style={{ marginLeft: "12px", width: "18px", height: "17px", font: "normal normal normal 14px/17px Rubik", color: "#1D2226" }}>No</span>
      </div>
      <button
        onClick={() => navigate("/profile")}
        style={{
          position: "absolute",
          top: "736px",
          left: "20px",
          width: "335px",
          height: "46px",
          background: "#6C25FF",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          opacity: 1
        }}
      >
        <span style={{
          position: "absolute",
          top: "14px",
          left: "108px",
          width: "120px",
          height: "19px",
          textAlign: "center",
          font: "normal normal 400 16px/17px Rubik",
          color: "#FFFFFF",
          opacity: 1,
          whiteSpace: "nowrap"
        }}>
          Create Account
        </span>
      </button>
    </div>
  );
}