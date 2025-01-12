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
        const [searchTerm, setSearchTerm] = useState("");
        const [sortOrder, setSortOrder] = useState("asc");
      
     
        const filteredFlowers = products
            ? products
                .filter(flower => 
                    (activeCategory === "All" || flower.category === activeCategory) &&
                    flower.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .sort((a, b) => {
                    if (sortOrder === "asc") {
                        return a.price - b.price;
                    } else {
                        return b.price - a.price;
                    }
                })
            : [];
  return (
    <section id='Flowers'>
        <div className="flow-all">
            <div className="flow-up">
                <h5>OUR FLOWER</h5>
                <h2>New Arrivals</h2>
                <div className="search-sort-container" style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                    <input
                        type="text"
                        placeholder="Seach..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                    <button
                        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            cursor: 'pointer'
                        }}
                    >
                        Price: {sortOrder === "asc" ? "Ascending" : "Descending"}
                    </button>
                </div>
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
