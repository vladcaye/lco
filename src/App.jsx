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
      <Hero />
      <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        Body
      </div>
    </main>
    </BrowserRouter>
      
    </>
  )
}

export default App
