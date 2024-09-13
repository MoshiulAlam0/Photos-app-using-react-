import React from 'react'
import Nav from './sunComonent/Nav'
import Search from './sunComonent/Search'
import './Cmpnt.css'
import Category from './sunComonent/Category'

const Head = () => {
  return (
    <div id='header-con' className='w-100vmin h-[80vh] pb-6 flex items-center justify-between flex-col'>
      <Nav/>
      <Search/>
      <Category/>
    </div>
  )
}

export default Head

