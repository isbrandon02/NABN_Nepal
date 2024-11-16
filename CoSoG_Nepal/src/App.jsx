import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home.jsx"
import Header from "./components/Header.jsx"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from "./pages/AboutUs.jsx"
import Contact from "./pages/Contact.jsx"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} /> 
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
