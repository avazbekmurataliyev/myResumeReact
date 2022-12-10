import React from 'react';
import './Sidebar.css';
import {Link , Outlet} from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='s-menu'>

        <li className='menu-item'> <Link to = "/"> Asosiy </Link></li>
        <li className='menu-item'>   <Link to = "/contact"> Bog`lanish </Link></li>
        <li className='menu-item'>  Xizmatlar </li>
        <Outlet />

        </ul>
        
    </div>
  )
}
