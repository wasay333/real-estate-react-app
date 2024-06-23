import React, { useContext } from 'react'
import "../layout/layout.scss"
import Navbar from '../../component/navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Layout = () => {
  return ( 
    <div className='layout'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}
function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}
export {Layout, RequireAuth};