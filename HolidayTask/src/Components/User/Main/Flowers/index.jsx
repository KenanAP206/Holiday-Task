import {React} from 'react'
import './Flowers.css'
import FlowCard from '../../../../Components/User/FlowCard/index'
import { useState } from 'react'
import { productContext } from '../../../../Context/ProductContext';
import { useContext } from 'react';
import { CircularProgress } from '@mui/material';
function index() {
        let {products,loading} = useContext(productContext)
        const [activeCategory, setActiveCategory] = useState("All");
        // const flowers = [
        //   { id: 1, name: "Cactus", category: "Bouquet", img: "cactus.png", price:10 },
        //   { id: 2, name: "Peony", category: "Flower box", img: "peony.png", price:10 },
        //   { id: 3, name: "Hanging Plant", category: "Flower shelf", img: "hanging-plant.png", price:10 },
        //   { id: 4, name: "Pink Bouquet", category: "Basket of flower", img: "pink-bouquet.png", price:10 },
        //   { id: 5, name: "Mini Plant", category: "Gift combos", img: "mini-plant.png", price:10 },
        //   { id: 5, name: "Mini Plant", category: "Gift combos", img: "mini-plant.png", price:10 },
        // ];
      
     
        const filteredFlowers =
          activeCategory === "All"
            ? products || [] 
            : (products || []).filter((flower) => flower.category === activeCategory);
  return (
    <section id='Flowers'>
        <div className="flow-all">
            <div className="flow-up">
                <h5>OUR FLOWER</h5>
                <h2>New Arrivals</h2>
            </div>
            <div className="flow-nav">
                <ul>
                    <li className={activeCategory === "All" ? "active" : ""} onClick={() => setActiveCategory("All")}>All</li>
                    <li className={activeCategory === "Bouquet" ? "active" : ""} onClick={() => setActiveCategory("Bouquet")}>Bouquet</li>
                    <li className={activeCategory === "Flower box" ? "active" : ""} onClick={() => setActiveCategory("Flower box")}>Flower box</li>
                    <li className={activeCategory === "Flower shelf" ? "active" : ""} onClick={() => setActiveCategory("Flower shelf")}>Flower shelf</li>
                    <li className={activeCategory === "Basket of flower" ? "active" : ""} onClick={() => setActiveCategory("Basket of flower")}>Basket of Flower</li>
                    <li className={activeCategory === "Gift combos" ? "active" : ""} onClick={() => setActiveCategory("Gift combos")}>Gift combos</li>
                </ul>
            </div>
            <div className="flow-cards">
        {
        loading ? (
        <div className="loadbar"> <CircularProgress /></div> 
        ):(
             filteredFlowers.map((flower) => (
            <FlowCard key={flower.id} id={flower.id} name={flower.name} image={flower.image} price={flower.price}/>
        ))          
        )
      } 
            </div>
            <div className="flow-low">
                <p>VIEW ALL PRODUCTS</p>
            </div>
        </div>
    </section>
  )
}

export default index
