import React from 'react'
import "./navbar2.css"
import {IoAirplane,IoBagSharp} from "react-icons/io5"
import {IoMdTrain} from "react-icons/io"
import {FaTaxi} from "react-icons/fa"
import {MdAccountCircle} from "react-icons/md"

import logo from "../Navbar/goodfarelogo.png"
export const Navbar2 = () => {
  return (
    <div className='navbar2-c'>
        {/* <div className='navbar2-left'>Goodfare</div> */}
        <div className='navbar2-left'><img className='nav2-logo' src={logo} alt='logo'/></div>
        <div className='navbar2-middle'>
            <div className='btn-divs'><IoAirplane className='nav2-icon'/><button className='nav2-btn'> Flights</button></div>
            <div className='btn-divs'><IoMdTrain className='nav2-icon'/><button className='nav2-btn'> Trains</button></div>
            <div className='btn-divs'><FaTaxi className='nav2-icon'/><button className='nav2-btn'> Taxi</button></div>
        </div>
        <div className='navbar2-right'> 
            <div className='nav2-right-div gray-div'><IoBagSharp className='nav2-icon gray-icon'/><span className='nav2-span'> My Trips</span></div>
            <div className='nav2-right-div nav2-login'><MdAccountCircle className='nav2-icon'/><span className='nav2-span nav2-login-span'> LOGIN / SIGNUP</span></div>
        </div>
    </div>
  )
}
