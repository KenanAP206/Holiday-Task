import React from 'react'
import { PiHandbagLight, } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


function index() {
  return (
    <div>
       <nav className="navbar">
      
      <div className="logo">
      <img src="./src/assets/Images/logo.png" alt="" />
      </div>


      <ul className="nav-links">
        <li>
          <a href="#" className="active">
          HOME
          </a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">SHOP</a>
        </li>
        <li>
          <a href="#">PAGES</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>


      <div className="icons">
        <a href="#" className="icon">
          <CiSearch />
        </a>
        <a href="#" className="icon">
        <MdFavoriteBorder />  <span className="count">05</span>
        </a>
        <a href="#" className="icon">
        <PiHandbagLight />
        </a>
        <a href="#" className="price">
          $65.0
        </a>
      </div>
    </nav>
    </div>
  )
}

export default index
