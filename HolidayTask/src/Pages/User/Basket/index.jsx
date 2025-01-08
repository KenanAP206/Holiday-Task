import React,{useState , useEffect, useContext } from 'react'
import Locater from '../../../Components/User/Locater/index'
import './Basket.css'
import { basketContext } from '../../../context/BasketContext';

function index() {
    let {basket,setBasket}=useContext(basketContext)
    let [totalPrice,setTotalPrice]=useState(0)
    function handleDecrease(item){
    if(item.count>1){
      item.count--
      setBasket([...basket])
    }else{
      let filtered=basket.filter(elem=>elem.id!=item.id)
      setBasket(filtered)
    }
    }
  
    function handleIncrease(item){
       item.count++
       setBasket([...basket])
    }
  
    function handleDelete(item){
      let filtered=basket.filter(elem=>elem.id!=item.id)
      setBasket(filtered)
  
    }
  
  
    function calcTotalPrice(){
        let total = basket.reduce((sum,item)=>sum + (item.price * item.count),0)
        setTotalPrice(total)
    }
    useEffect(()=>{
      calcTotalPrice()
    },[basket])
  


    return (
        <div>
            <Locater location='Basket' />

            <section id='basketim'>
            <div className="cart-container">
      <div className="cart-items">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <hr />
          </thead>
          <tbody>
          
  {
    basket.length === 0 ? (
      <h2 className="head">Sebetinizde mehsul yoxdur</h2>
    ) : (
      basket.map((item) => (
        <tr key={item.id}>
          <td className="product-info">
            <img srcSet={item.image} alt="Cactus Gym" />
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </td>
          <td className="quantity">
            <button onClick={() => handleDecrease(item)}>-</button>
            <span>{item.count}</span>
            <button onClick={() => handleIncrease(item)}>+</button>
          </td>
          <td className="tb-cost">{(item.price * item.count).toFixed(2)}</td>
          <td onClick={() => handleDelete(item)} className="remove">×</td>
        </tr>
      ))
    )
  }
  
  
          </tbody>
        </table>
      </div>

      <div className="cart-summary">
        <div className="coupon-section">
          <h5>Enter coupon code. It will be applied at checkout.</h5>
            <div className="coupon-inp">
            <input type="text" placeholder="Your code here" />
            <button>APPLY</button>
            </div>
        </div>
        <div className="total-section">
          <div className="cart-total">
            <h4>Cart Total</h4>
            <p>Subtotal: <span>  ${totalPrice.toFixed(2)}</span></p>
            <p className="total">Total: <span style={{ color: "#ff4d4d" }}>  ${totalPrice.toFixed(2)}</span></p>
            <button className="checkout-button">PROCEED TO CHECKOUT</button>
          </div>
         
        </div>
      </div>
    </div>
            </section>
        </div>
    )
}

export default index
