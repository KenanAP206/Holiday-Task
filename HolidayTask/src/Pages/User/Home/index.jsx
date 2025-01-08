import React, { useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import UserCard from '../../../Components/User/UserCard';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from "axios"
import MasterSlider from '../../../Components/User/Main/MasterSlider/index'
import Feature from '../../../Components/User/Main/Feature/index'
import AboutUs from '../../../Components/User/Main/AboutUs/index'
import Imager from '../../../Components/User/Main/Imager/index'
import Posts from '../../../Components/User/Main/Posts/index'
import LastSlider from '../../../Components/User/Main/LastSlider/index'
import Flowers from '../../../Components/User/Main/Flowers/index'
function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  let [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/books")
    .then(res=>setData(res.data))
},[])
  return (

    <div className="main">

      <MasterSlider />
      <Feature />
      <AboutUs />
      <Flowers />
      <Imager />
      <Posts />
      <LastSlider />
    </div>
  )
}

export default Home
