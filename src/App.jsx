
import './App.css'

import React from 'react'
import Head from './component/Head'
import Setting from './component/Setting'
import MainPhotoCon from './component/MainPhotoCon'

// import { Routes, Route } from 'react-router-dom';
{/* <Routes>
  <Route path="/" element={<h1>this is the home page</h1>} />
  <Route path="/about" element={<h1>this is the about page</h1>} />
  <Route path="/works" element={<h1>this is the works page</h1>} />
</Routes> */}

const App = () => {
  return (
    <main id='main'>
      <Head/>
      <Setting/>
      <MainPhotoCon/>
    </main>
  )
}

export default App
