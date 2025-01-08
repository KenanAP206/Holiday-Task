import React from 'react'
import './locater.css'
function index(props) {
  return (
    <div className='locater'>
      <div className="locater-txt">
        <h2>{props.location}</h2>
        <p>        <span>HOME</span> | {props.location}</p>
      </div>
    </div>
  )
}

export default index
