import React from "react";
import "./MainMenu.css";

export default function MainMenu({ data, onClick }) {
  return (
    <div className="carddd" href="Division" onClick={onClick}>
        <div className="atasan">City/Division</div>
        <p className="lanjutan">Encyclopedia</p>
        <a href="Division" className="button">Division</a>
        <a href="City" className="button">City</a>
        <a href="Profile" className="button">Profile</a>
        
    </div>
    
  );
}