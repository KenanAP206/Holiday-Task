import React from 'react'
import './flowcard.css'
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function index(props) {
  return (
    <div className='flow-card'>
      <div className="fl-card-up">
        <img srcSet="https://placehold.co/300x400?font=roboto" alt="" />
        <div className="f-c-hover">
        <IoIosSearch />
        <IoBagHandleOutline />
        <CiHeart />
        </div>
      </div>
      <div className="fl-card-low" key={props.key}>
        <h3>{props.name}</h3>
        <div className="ani-h4">
        <h4>${props.price}</h4>
        <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  )
}

export default index
