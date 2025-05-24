import React, { useState } from 'react'
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { PiUserCircle } from "react-icons/pi";
import "../styles/Header.css";


function Header() {

  return (
    <div className='header'>
    <div className='search'>
    <div className='input'>
    <IoSearch size="24"/>
    <input type='text' placeholder='Search'></input>
    </div>
    <IoMdNotifications style={{color : "darkblue" , fontSize : "24px"}}/>
    </div>

    <div className='profile'>
    <PiUserCircle size="30"/>
    <button><CgAddR style={{color : "darkblue" , fontSize : "30px"}}/></button>
    </div>
    </div>
  )
}

export default Header
