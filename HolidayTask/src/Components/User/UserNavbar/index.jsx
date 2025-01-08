import React, {useContext} from 'react'
import { PiHandbagLight, } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { favoriteContext } from '../../../Context/FavoritesContext';
import { basketContext } from '../../../context/BasketContext';
import { NavLink } from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";
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
        <NavLink style={({ isActive }) =>isActive ? { color: "#F45D96"} : { color: "black" }} to='/about'>
          ABOUT
          </NavLink>
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
        <NavLink style={({ isActive }) =>isActive ? { color: "#F45D96"} : { color: "black" }} to='/contact'>
          CONTACT
          </NavLink>
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
        <NavLink className='adminer' to='/admin'>
          Admin
          <RiAdminFill /> 
        </NavLink>
      </div>
    </nav>
    </div>
  )
}

export default index
