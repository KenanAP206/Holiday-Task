import {Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
import Home from './pages/User/Home'
import Basket from './Pages/User/Basket'
import Favorites from './Pages/User/Favorites'
import AdminRoot from './pages/Admin/AdminRoot'
import DashBoard from './pages/Admin/DashBoard'
import Adminproducts from './pages/Admin/Books'
import Addbook from './pages/Admin/Add Book'
import AdminDetail from './pages/Admin/BookDetails'
import EditBook from './pages/Admin/EditBook'
import UserRoot from './Pages/User/UserRoot'
function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<UserRoot/>} >
          <Route index element={<Home/>}/>  
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Route>


        <Route path='/admin' element={<AdminRoot/>} >
          <Route index element={<DashBoard/>}/>
          <Route path='products' element={<Adminproducts/>}/>
          <Route path='products/add' element={<Addbook />}/>
          <Route path='products/edit/:id' element={<EditBook />}/>
          <Route path='products/:id' element={<AdminDetail/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
