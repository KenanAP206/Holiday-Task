import {Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
import Home from './pages/User/Home'
import AdminRoot from './pages/Admin/AdminRoot'
import DashBoard from './pages/Admin/DashBoard'
import AdminBooks from './pages/Admin/Books'
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
        
        </Route>


        <Route path='/admin' element={<AdminRoot/>} >
          <Route index element={<DashBoard/>}/>
          <Route path='books' element={<AdminBooks/>}/>
          <Route path='books/add' element={<Addbook />}/>
          <Route path='books/edit/:id' element={<EditBook />}/>
          <Route path='books/:id' element={<AdminDetail/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
