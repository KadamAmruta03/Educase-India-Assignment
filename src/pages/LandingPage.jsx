import React from "react";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div style={{
      position: "relative",
      width: "375px",
      height: "812px",
      background: "#F7F8F9 0% 0% no-repeat padding-box",
      fontFamily: "Rubik",
      overflow: "hidden",
      margin: "0 auto",
    }}>
      <div style={{
        position: "absolute",
        top: "549px",
        left: "20px",
        width: "231px",
        height: "33px",
        fontSize: "28px",
        fontWeight: 500,
        lineHeight: "33px",
        color: "#1D2226",
        overflow: "hidden",
      }}>
        Welcome to PopX
      </div>
      <div style={{
        position: "absolute",
        top: "590px",
        left: "20px",
        width: "232px",
        height: "48px",
        textAlign: "left",
        font: "normal normal normal 18px/26px Rubik",
        letterSpacing: "0px",
        color: "#1D2226",
        opacity: 0.6,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </div>
      <button
        onClick={() => navigate("/signup")}
        style={{
          position: "absolute",
          top: "669px",
          left: "20px",
          width: "335px",
          height: "46px",
          background: "#6C25FF",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 1
        }}
      >
        <span style={{
          textAlign: "center",
          font: "normal normal 400 16px/17px Rubik",
          letterSpacing: "0px",
          color: "#FFFFFF",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        }}>
          Create Account
        </span>
      </button>
      <button
        onClick={() => navigate("/login")}
        style={{
          position: "absolute",
          top: "725px",
          left: "20px",
          width: "335px",
          height: "46px",
          background: "#6C25FF4B",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{
          display: "block",
          textAlign: "center",
          font: "normal normal 500 16px/46px Rubik",
          color: "#1D2226",
        }}>
          Already Registered? Login
        </span>
      </button>
    </div>
  );
}