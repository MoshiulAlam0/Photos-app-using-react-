
import './App.css'

import React, { useState } from 'react'
import Head from './component/Head'
import Setting from './component/Setting'
import MainPhotoCon from './component/MainPhotoCon'
import { MyContext } from './context/All_context'

// import { Routes, Route } from 'react-router-dom';
{/* <Routes>
  <Route path="/" element={<h1>this is the home page</h1>} />
  <Route path="/about" element={<h1>this is the about page</h1>} />
  <Route path="/works" element={<h1>this is the works page</h1>} />
</Routes> */}

const App = () => {

  const [searchValue, setsearchValue] = useState("");
  return (
    <main id='main' suppressHydrationWarning>
      <MyContext.Provider value={{
        searchState:{searchValue, setsearchValue},
      }}>
      <Head/>
      <Setting/>
      <MainPhotoCon/>
    </MyContext.Provider>
    </main>
  )
}

export default App
