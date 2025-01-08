import React from 'react'
import './flowcard.css'
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext } from 'react';
import { basketContext } from '../../../context/BasketContext';
import { favoriteContext } from '../../../Context/FavoritesContext';

function index(props) {
  let {basket,setBasket}=useContext(basketContext)
  let {favorite,setFavorite}=useContext(favoriteContext)

  function handleAddBasket(product){
    let findBasket=basket.find(item=>item.id==product.id)
    if(findBasket){
        findBasket.count++
        setBasket([...basket])
    }else{
        setBasket([...basket,{...product,count:1}])
       
    }
}

  function handleAddFavorite(product){
    let findFavorite= favorite.find(item=>item.id==product.id)

    if(findFavorite){
       alert("artiq senin wishlistinde bu mehsul var bir de elave eliye bilmersen")
    }else{
       setFavorite([...favorite,product])
    }
 }

  return (
    <div className='flow-card'>
      <div className="fl-card-up">
        <img srcSet={props.image} alt="" />
        <div className="f-c-hover">
        <IoIosSearch />
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
