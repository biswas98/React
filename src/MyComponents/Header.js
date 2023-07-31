import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <ul>
            <li>Logo</li>
          </ul>
        </div>

        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
