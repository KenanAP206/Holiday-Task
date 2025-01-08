import React from 'react'
import { favoriteContext } from '../../../context/FavoritesContext';
import { useContext } from 'react'
import './Fav.css'
import Locater from '../../../Components/User/Locater/index'
function Favorites() {

  let {favorite,setFavorite}=useContext(favoriteContext)


  function handleDeleteFavorite(id){
      let filteredFavorite=favorite.filter(item=>item.id!==id)
      setFavorite(filteredFavorite)
  }
 

    return (
      <>
      <Locater location='Favorites' />
       <section id='favlarim'>
         {favorite.length === 0 ? (
           <div className="empty-favorites">
             <h2>Favoriler boş</h2>
           </div>
         ) : (
           <div className="favorites-container">
             {favorite.map(item => (
               <div key={item.id} className="favorite-card">
                 <img src={item.image} alt={item.title} className="favorite-image" />
                 <div className="favorite-content">
                   <h3>{item.name}</h3>
                 </div>
                 <div className="favorite-actions">
                   <button onClick={() => handleDeleteFavorite(item.id)} className="remove-button">
                     Remove
                   </button>
                 </div>
               </div>
             ))}
           </div>
         )}
       </section>
       </>
      );
      
  
}

export default Favorites