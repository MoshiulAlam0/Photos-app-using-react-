import React, { useState } from 'react'
import { CgMenuHotdog } from "react-icons/cg";


const Nav = () => {
  const [right, setright] = useState('-100%');
        
  let menuItem = ['explore', 'register', 'about', 'contact']
  return (
    <div className= ' text-white w-full px-[6vmin] py-3 flex items-center justify-between backdrop-blur-sm	relative z-20'>
      <a href="/"><img src="/logo2.png" className='w-12 bg-white rounded-full relative z-20' alt="" /></a>
      <p onClick={()=>(setright(right==='-100%'?'0%':'-100%'))} className={`menu-icon hidden text-[2.9rem] text-white relative z-[22]`}><CgMenuHotdog/></p>
      <ul style={{right:right}} id='menu-item-con' className='flex items-center justify-center gap-[2vmin]'>
        {menuItem.map((e, i)=>{
            return <a className='font-extralight hover:text-[#00c421] capitalize' href="" key={i}>{e}</a>
        })}
      </ul>
    </div>
  )
}

export default Nav
