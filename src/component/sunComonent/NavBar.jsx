import React, { useState } from 'react'
import { CgMenuHotdog } from "react-icons/cg";
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [right, setright] = useState('-100%');
        
  let menuItem = ['home', 'my cullection', 'about', 'contact']
  return (
    <div className= 'fixed text-[#d1d1d1] w-full px-[6vmin] pt-3 pb-1 flex items-center justify-between backdrop-blur-sm	 z-20'>
      <a href="/"><img src="/logo2.png" className='w-12 bg-white rounded-full relative z-20' alt="" /></a>

      <p onClick={()=>(setright(right==='-100%'?'0%':'-100%'))} className={`menu-icon hidden text-[2.9rem] text-white relative z-[22]`}><CgMenuHotdog/></p>
      
      <ul style={{right:right}} id='menu-item-con' className='flex items-center justify-center gap-[2vmin]'>
        <li><Link to={'/'} className='font-extralight hover:text-[#00c421] capitalize' href="" key={1}>{menuItem[0]}</Link></li>
        <li><Link to={'/myCollection'} className='font-extralight hover:text-[#00c421] capitalize' href="" key={1}>{menuItem[1]}</Link></li>
        <li><Link to={'/about'} className='font-extralight hover:text-[#00c421] capitalize' href="" key={1}>{menuItem[2]}</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
