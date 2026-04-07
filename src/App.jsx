import { useState } from 'react'
import './App.css'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <BrowserRouter>
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Navbar />
      {/* <Hero /> */}
    </main>
    </BrowserRouter>
      
    </>
  )
}

export default App
