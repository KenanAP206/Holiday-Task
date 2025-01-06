import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../../Components/Admin/AdminNavbar'
import AdminFoot from '../../Components/Admin/AdminFooter'
function UserRoot() {
  return (
    <div>
      <AdminNav />
      <Outlet />
      <AdminFoot />
    </div>
  )
}

export default UserRoot
