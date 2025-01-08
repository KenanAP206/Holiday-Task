import {React, useState, useEffect} from 'react';
import './BookDetail.css';
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function BookDetail() {
  let navigate=useNavigate()
  useParams
  let [data,setData]=useState([])
  let { id } = useParams(); 
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setData([res.data]))
  }, [id]);
  
  return (
   <div className="main">
       {data.map((book) => {
   return(
    <div className="book-detail-container"  key={book.id}>
    <div className="book-image-section" >
      <img 
        src={book.image}
        alt={book.title}
        className="book-cover"
      />
      <div className="scroll-buttons">
        <button className="scroll-up" onClick={()=>navigate('/admin/books')}><ArrowBackIosNewIcon /></button>
      </div>
    </div>

    <div className="book-info-section">
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p className="book-description">
       {book.description}
      </p>
      <div className="extra-details">
        <div>
          <h4>Editors</h4>
          <p>J.K. Rowling (author), Christopher Reath, Alena Gestabon, Steve Korg</p>
        </div>
        <div>
          <h4>Language</h4>
          <p>{book.language}</p>
        </div>
        <div>
          <h4>Paperback</h4>
          <p>Paper textured, full colour, {book.pagesCount} pages<br />ISBN: 987 3 32564 455 B</p>
        </div>
      </div>
    </div>
  </div>
   )
     })}
     {/* <div className="book-detail-container">
      <div className="book-image-section">
        <img 
          src="https://imgs.search.brave.com/3S27RTRmzIfSaoYvO-muVuIBgM6dL8PQYad0bgMilPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I4Lzgw/LzcxL2I4ODA3MWMy/NGVmYmNlYmEyOTI5/NjY2MWZiMzEwYTMz/LmpwZw" 
          alt="Harry Potter: Half Blood Prince" 
          className="book-cover"
        />
        <div className="scroll-buttons">
          <button className="scroll-up" onClick={()=>navigate('/books')}><ArrowBackIosNewIcon /></button>
        </div>
      </div>

      <div className="book-info-section">
        <h1>Harry Potter: Half Blood Prince</h1>
        <h3>JK Rowling</h3>
        <p className="book-description">
          Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.
        </p>
        <div className="action-buttons">
          <button className="start-reading">Start reading →</button>
          <div className="icon-buttons">
            <button><FavoriteBorderIcon /></button>
            <button><ShoppingBasketIcon /></button>
            <button><DownloadIcon /></button>
          </div>
        </div>
        <hr />
        <div className="extra-details">
          <div>
            <h4>Editors</h4>
            <p>J.K. Rowling (author), Christopher Reath, Alena Gestabon, Steve Korg</p>
          </div>
          <div>
            <h4>Language</h4>
            <p>Standard English (USA & UK)</p>
          </div>
          <div>
            <h4>Paperback</h4>
            <p>Paper textured, full colour, 345 pages<br />ISBN: 987 3 32564 455 B</p>
          </div>
        </div>
      </div>
    </div> */}
   </div>
  );
}

export default BookDetail;
