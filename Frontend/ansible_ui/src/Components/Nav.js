import React from 'react'
import {FaUser} from "react-icons/fa"
import Ribbon from "../Media/Ribbon.png"

function Nav() {
  return (
    <div className='nav_container bg-slate-200 flex justify-center shadow-sm h-20'>
        <div className='nav-items flex justify-between items-center w-[90%]'>
        <div className='logo w-36'>
        <img className='' src='https://1000logos.net/wp-content/uploads/2016/10/Bosch-Logo.png'/>
        <div className='ribbon w-[100%] absolute left-0 top-[9%] z-[-10]'><img className='w-[100%]' src={Ribbon}/></div>
        
        </div>
        <h1 className=' w-16 flex items-center justify-around'><FaUser/>User</h1>
        </div>
    </div>
  )
}

export default Nav