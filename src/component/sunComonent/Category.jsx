import React from 'react'

const Category = () => {
  let category = ['backgrounds', ' fashion', ' nature', ' science', ' education', ' feelings', ' health', ' people', ' religion', ' places', ' animals', ' industry', ' computer', ' food', ' sports', ' transportation', ' travel', ' buildings', ' business', ' music']
  return (
    <div className='w-full px-2 py-4 relative z-10'>  
      <ul className='w-full flex-wrap flex items-center justify-center gap-[2vmin] capitalize font-extralight text-[#ffffff]'>
        {category.map((e, i) =>{
            return <a className='px-[2vmin] text-[1.3rem] backdrop-blur-sm opacity-[.5]  hover:opacity-100   rounded-full border-[1px] border-solid border-[#bababa] transition-all hover:bg-[#00c42163]' href='/' key={i}>{e}</a>
        })
        }
      </ul>
    </div>
  )
}

export default Category
