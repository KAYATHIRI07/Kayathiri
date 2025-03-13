import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Usestate from './Hooks/Usestate'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseRef1 from './Hooks/UseRef1'
import UseMemo from './Hooks/UseMemo'
import Parent1 from './Hooks/UseCallback/Parent1';
import Search from './Hooks/UseCallback/Search';
function App() {
  return (
      <div>
        <Navbar/>
        <UseEffect/>
        <Usestate/>
        <UseRef/>
        <UseRef1/>
        <UseMemo/>
        <Parent1/>
        <Search/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
  )
}
export default App