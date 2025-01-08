import React from 'react'
import './flowcard.css'
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext } from 'react';
import { basketContext } from '../../../context/BasketContext';
import { favoriteContext } from '../../../Context/FavoritesContext';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
function index(props) {
  let {basket,setBasket}=useContext(basketContext)
  let {favorite,setFavorite}=useContext(favoriteContext)

  function handleAddBasket(product){
    let findBasket=basket.find(item=>item.id==product.id)
    if(findBasket){
        findBasket.count++
        setBasket([...basket])

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "+1 to Cart"
        });
    }else{
        setBasket([...basket,{...product,count:1}])
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Added to Cart"
        });
    }
}

  function handleAddFavorite(product){
    let findFavorite= favorite.find(item=>item.id==product.id)

    if(findFavorite){
      
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Already in Favorites"
      });
    }else{
       setFavorite([...favorite,product])

       
       const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Added to Favorites"
      });
    }
 }

  return (
    <div className='flow-card'>
      <div className="fl-card-up">
        <img srcSet={props.image} alt="" />
        <div className="f-c-hover">
      <NavLink to={`/${props.id}`}>   <IoIosSearch /></NavLink>
        <IoBagHandleOutline onClick={()=>handleAddBasket(props)} />
        <CiHeart  onClick={()=>handleAddFavorite(props)} />
        </div>
      </div>
      <div className="fl-card-low" key={props.key}>
        <h3>{props.name}</h3>
        <div className="ani-h4">
        <h4>${props.price}</h4>
        <p style={{cursor:'pointer'}} onClick={() => handleAddBasket(props)}>ADD TO CART</p>
        </div>
      </div>
    </div>
  )
}

export default index
