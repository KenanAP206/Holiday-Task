import React, {useContext} from 'react'
import { PiHandbagLight, } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { favoriteContext } from '../../../Context/FavoritesContext';
import { basketContext } from '../../../context/BasketContext';
import { NavLink } from 'react-router-dom';

function index() {
  let {favorite} = useContext(favoriteContext)
  let {basket} = useContext(basketContext)
  return (
    <div>
       <nav className="navbar">
      
      <NavLink to='/'> <div className="logo">
      <img src="./src/assets/Images/logo.png" alt="" />
      </div></NavLink>


      <ul className="nav-links">
        <li>
          <NavLink style={({ isActive }) =>isActive ? { color: "#F45D96"} : { color: "black" }} to='/'>
          HOME
          </NavLink>
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
        <NavLink to='/favorites' className="icon">
        <MdFavoriteBorder /><span className="count">{favorite ? favorite.length : 0}</span>
        </NavLink>

        <NavLink to='/Basket'> <a href="#" className="icon">
        <PiHandbagLight /><span className="count">{basket ? basket.length : 0}</span>
        </a></NavLink>
        <a href="#" className="price">
          $65.0
        </a>
      </div>
    </nav>
    </div>
  )
}

export default index
