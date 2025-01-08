import {Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
import Home from './pages/User/Home'
import Basket from './Pages/User/Basket'
import Favorites from './Pages/User/Favorites'
import Contact from './Pages/User/Contact'
import About from './Pages/User/About'
import Details from './Pages/User/Detail'
import AdminRoot from './pages/Admin/AdminRoot'
import DashBoard from './pages/Admin/DashBoard'
import Adminproducts from './pages/Admin/Products'
import Addproduct from './pages/Admin/AddProducts'
import AdminDetail from './pages/Admin/ProductDetails'
import EditBook from './pages/Admin/EditProducts'
import UserRoot from './Pages/User/UserRoot'
function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<UserRoot/>} >
          <Route index element={<Home/>}/>  
          <Route path='/:id' element={<Details/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>


        <Route path='/admin' element={<AdminRoot/>} >
          <Route index element={<DashBoard/>}/>
          <Route path='products' element={<Adminproducts/>}/>
          <Route path='products/add' element={<Addproduct />}/>
          <Route path='products/edit/:id' element={<EditBook />}/>
          <Route path='products/:id' element={<AdminDetail/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
