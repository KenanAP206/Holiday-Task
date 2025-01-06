import React from 'react'
import { FaInstagram, FaFacebookF,FaTwitter,FaLinkedinIn  } from "react-icons/fa";

function index() {
  return (
    <div>
  <footer className="footer">
      <div className="footer-top">
        <div className="image-gallery">
         <div className="img-gal-card"> 
          <img src="./src/assets/Images/insta-1.png" alt="Flower 1" />
          <div className="igc-hover">
          <FaInstagram /> <p>Follow us</p> <a href="">@florist</a>
          </div>
          </div>
         <div className="img-gal-card"> <img src="./src/assets/Images/insta-2.png" alt="Flower 2" /> 
         <div className="igc-hover">
          <FaInstagram /> <p>Follow us</p> <a href="">@florist</a>
          </div></div>
         <div className="img-gal-card"> <img src="./src/assets/Images/insta-3.png" alt="Flower 3" />
         <div className="igc-hover">
          <FaInstagram /> <p>Follow us</p> <a href="">@florist</a>
          </div> </div>
         <div className="img-gal-card"> <img src="./src/assets/Images/insta-4.png" alt="Flower 4" /> 
         <div className="igc-hover">
          <FaInstagram /> <p>Follow us</p> <a href="">@florist</a>
          </div></div>
         <div className="img-gal-card"> <img src="./src/assets/Images/insta-5.png" alt="Flower 5" /> 
         <div className="igc-hover">
          <FaInstagram /> <p>Follow us</p> <a href="">@florist</a>
          </div></div>
        </div>
        <div className="footer-intro">
          <h2>     <img src="./src/assets/Images/logo.png" alt="" /></h2>
          <p>
            The floristry business has a significant market in the corporate
            and social event world, as flowers.
          </p>
          <p className='ft-intro-icons'><FaFacebookF /><FaTwitter /><FaInstagram /><FaLinkedinIn /></p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <div className="footer-l-colum">
      <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Account</h4>
          <ul>
            <li><a href="#">My cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Login/Register</a></li>
          </ul>
        </div>  
      </div>
        <div className="footer-column column2">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter to get more free tips. No Spam, Promise.
          </p>
          <form>
            <input type="email" placeholder="Email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-column">
          <h4>Get in touch</h4>
          <p>69 North Cleveland Street, Memphis, USA</p>
          <p>(123) 8111 9210 - (012) 1111 6868</p>
          <p><a href="mailto:Florist@supportthem.com">Florist@supportthem.com</a></p>
        </div>
      </div>
      <div className="footer-credits">
        <p>
          Copyright ©2025 All rights reserved | This template is made with 💖 by
          <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
        </p>
      </div>
    </footer>
    </div>
  )
}

export default index
