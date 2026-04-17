import React from "react";
import profilePic from "../assets/profile-pic.png";
import cameraIcon from "../assets/camera-iocn.svg";
export default function ProfilePage() {
  return (
    <div style={{
      position: "relative",
      width: "375px",
      height: "812px",
      background: "#F7F8F9",
      fontFamily: "Rubik",
      margin: "0 auto",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "375px",
        height: "68px",
        background: "#FFFFFF",
        boxShadow: "0px 3px 6px 0px #00000007",
        opacity: 1,
        zIndex: 10,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      }}>
        <span style={{
          position: "absolute",
          top: "27px",
          left: "15px",
          width: "146px",
          height: "22px",
          textAlign: "left",
          font: "normal normal normal 18px/21px Rubik",
          letterSpacing: "0px",
          color: "#1D2226",
          textTransform: "none",
          opacity: 1,
          display: "flex",
          alignItems: "center"
        }}>
          Account Settings
        </span>
      </div>
      <img
        src={profilePic}
        alt="Profile"
        style={{
          position: "absolute",
          top: "98px",
          left: "20px",
          width: "76px",
          height: "76px",
          borderRadius: "50%",
          opacity: 1,
          objectFit: "cover"
        }}
      />

      <img
        src={cameraIcon}
        alt="Camera"
        style={{
          position: "absolute",
          top: "147px",
          left: "79px",
          width: "21px",
          height: "23px",
          opacity: 1,
          zIndex: 5
        }}
      />
      <span style={{
        position: "absolute",
        top: "98px",
        left: "116px",
        width: "73px",
        height: "18px",
        textAlign: "left",
        font: "normal normal 500 15px/19px Rubik",
        letterSpacing: "0px",
        color: "#1D2226",
        textTransform: "none",
        opacity: 1,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      }}>
        Marry Doe
      </span>

      <span style={{
        position: "absolute",
        top: "122px",
        left: "116px",
        width: "118px",
        height: "17px",
        textAlign: "left",
        font: "normal normal 400 14px/19px Rubik",
        letterSpacing: "0px",
        color: "#1D2226",
        textTransform: "none",
        opacity: 1,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      }}>
        Marry@Gmail.Com
      </span>

      <p style={{
        position: "absolute",
        top: "204px",
        left: "20px",
        width: "337px",
        height: "63px",
        textAlign: "left",
        font: "normal normal normal 14px/22px Rubik",
        letterSpacing: "0px",
        color: "#1D2226",
        textTransform: "none",
        opacity: 1,
        margin: 0,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <div style={{
        position: "absolute",
        top: "287px",
        left: "0px",
        width: "375px",
        height: "1px",
        backgroundImage: "linear-gradient(to right, #CBCBCB 50%, rgba(255,255,255,0) 0%)",
        backgroundPosition: "top",
        backgroundSize: "8px 1px",
        backgroundRepeat: "repeat-x",
        opacity: 1
      }} />

      <div style={{
        position: "absolute",
        top: "776px",
        left: "0px",
        width: "375px",
        height: "1px",
        backgroundImage: "linear-gradient(to right, #CBCBCB 50%, rgba(255,255,255,0) 0%)",
        backgroundPosition: "top",
        backgroundSize: "8px 1px",
        backgroundRepeat: "repeat-x",
        opacity: 1
      }} />
    </div>
  );
}