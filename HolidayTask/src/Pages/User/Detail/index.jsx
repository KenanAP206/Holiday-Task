import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import Locater from '../../../Components/User/Locater/index'
import './details.css'
function index() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!data) return <div>Loading...</div>;
  
  return (
    <div>
      <Locater location='Details' />
      <section id='product-detail'>
      <div className="book-detail-container">
      <div className="book-image-section">
        <img src={data.image} alt={data.name} className="book-cover" />
        <div className="scroll-buttons">
          <button className="scroll-up" onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon />
          </button>
        </div>
      </div>

      <div className="book-info-section">
        <h1>{data.name}</h1>
        <p className="book-description">{data.description}</p>
        <div className="extra-details">
          <div>
            <h4>Price</h4>
            <p>${data.price}</p>
          </div>
      
        </div>
      </div>
    </div>
      </section>
    </div>
  )
}

export default index
