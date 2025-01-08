import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProductProvider from "./Context/ProductContext";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ProductProvider>
    <App />
    </ProductProvider>
  </BrowserRouter>,
)
