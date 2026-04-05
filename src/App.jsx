import { useState } from 'react'
import './App.css'
import { Navbar } from './sections/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Navbar />
      {/* <Home /> */}
    </main>
    </BrowserRouter>
      
    </>
  )
}

export default App
