import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const inputStyle = {
    width: "335px",
    height: "40px",
    border: "1px solid #CBCBCB",
    borderRadius: "6px",
    background: "#FFFFFF",
    fontFamily: "Rubik",
    fontSize: "14px",
    color: "#1D2226",
    padding: "0 16px",
    boxSizing: "border-box",
    outline: "none",
    opacity: 1,
  };
  return (
    <div style={{
      position: "relative",
      width: "375px",
      height: "812px",
      background: "#F7F8F9 0% 0% no-repeat padding-box",
      fontFamily: "Rubik",
      margin: "0 auto",
      overflow: "hidden"
    }}>
      <style>{`
        .login-input::placeholder {
          color: #919191;
          opacity: 1;
          font: normal normal normal 14px/17px Rubik;
          text-align: left;
          letter-spacing: 0px;
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
        Signin to your PopX account
      </h1>
      <p style={{
        position: "absolute",
        top: "123px",
        left: "20px",
        width: "232px",
        height: "48px",
        textAlign: "left",
        font: "normal normal normal 18px/26px Rubik",
        letterSpacing: "0px",
        color: "#1D2226",
        opacity: 0.6,
        margin: 0
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div style={{ position: "absolute", top: "195px", left: "20px", width: "335px" }}>
        <span style={{
          position: "absolute",
          top: "0px",
          left: "9px",
          width: "103px",
          height: "17px",
          background: "#F7F8F9",
          opacity: 1,
          zIndex: 1,
        }} />
        <label style={{
          position: "absolute",
          top: "1px",
          left: "14px",
          width: "85px",
          height: "15px",
          textAlign: "left",
          font: "normal normal normal 13px/17px Rubik",
          letterSpacing: "0px",
          color: "#6C25FF",
          opacity: 1,
          zIndex: 2,
          whiteSpace: "nowrap"
        }}>
          Email Address
        </label>
        <input
          className="login-input"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            ...inputStyle,
            marginTop: "9px",
            background: "transparent"
          }}
        />
      </div>
      <div style={{ position: "absolute", top: "258px", left: "20px", width: "335px" }}>
        <span style={{
          position: "absolute",
          top: "0px",
          left: "9px",
          width: "103px",
          height: "17px",
          background: "#F7F8F9",
          opacity: 1,
          zIndex: 1,
        }} />
        <label style={{
          position: "absolute",
          top: "1px",
          left: "14px",
          width: "59px",
          height: "15px",
          textAlign: "left",
          font: "normal normal normal 13px/17px Rubik",
          letterSpacing: "0px",
          color: "#6C25FF",
          opacity: 1,
          zIndex: 2,
          whiteSpace: "nowrap"
        }}>
          Password
        </label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            ...inputStyle,
            marginTop: "9px",
            background: "transparent"
          }}
        />
      </div>
      <button
        onClick={() => navigate("/profile")}
        style={{
          position: "absolute",
          top: "321px",
          left: "20px",
          width: "335px",
          height: "46px",
          background: "#CBCBCB",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          opacity: 1,
          padding: 0,
        }}
      >
        <span style={{
          position: "absolute",
          top: "14px",
          left: "147px",
          width: "42px",
          height: "19px",
          textAlign: "center",
          font: "normal normal 500 16px/17px Rubik",
          letterSpacing: "0px",
          color: "#FFFFFF",
          opacity: 1,
          display: "block"
        }}>
          Login
        </span>
      </button>
    </div>
  );
}