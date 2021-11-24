import React from "react";
import "./MainMenu.css";
import "./Profile.css";
import { FaGitAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function Profile({ data, onClick }) {
  return (
    <>
      <p class="title">Profile</p>
      <div class="cardcontainer">
        
        <img src="https://regonline.undip.ac.id/data/foto_ktm/21120119120026.jpg" alt="Aldi Mulyawan" class='tempatfoto'/>
        
        <div class='untuknama'>
          <p>Aldi Mulyawan</p>
        </div>

        <div class='untuknim'>
          <p>21120119120026</p>
        </div>

        <div class='untukkelompok'>
          <p>Data Engineer Intern at PT Berau Coal</p>
        </div>

        <div class='tombol'>
        <div class='tombolkecil1'>
          <a href="https://github.com/SMAMHTN/" target='_blank'>
            <p><FaGitAlt/> Github</p>
          </a>
        </div>
        <div class='tombolkecil2'>
          <a href="https://www.linkedin.com/in/smam/" target='_blank'>
            <p><AiFillLinkedin/> LinkedIn</p>
          </a>
        </div>
        </div>

      </div>
      </>
    
  );
}