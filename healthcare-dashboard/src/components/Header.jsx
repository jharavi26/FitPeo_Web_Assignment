import React, { useState } from 'react'
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "../styles/Header.css";


function Header() {

  return (
    <div className='header'>
    <div className='search-bar'>
    <IoSearch size="24"/>
    <input type='text' placeholder='Search'></input>
    </div>
    <IoMdNotifications style={{color : "darkblue" , fontSize : "24px"}}/>
    </div>
  )
}

export default Header
