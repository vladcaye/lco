import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import './App.css'
import { Navbar, Hero, Home } from './sections'

function App() {

  return (
    <>
      <BrowserRouter>
        <main className="min-h-screen w-full max-w-full overflow-x-hidden">
          <Navbar />
          <Hero />
          <Home />
        </main>
      </BrowserRouter>

    </>
  )
}

export default App
