import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProductProvider from "./Context/ProductContext";
import FavoritesProvider from './Context/FavoritesContext.jsx'
import BasketProvider from './Context/BasketContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <BasketProvider>
  <FavoritesProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </FavoritesProvider>
  </BasketProvider>
  </BrowserRouter>,
)
