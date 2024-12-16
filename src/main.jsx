import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Pages/Header.jsx'
import About from './Pages/About.jsx'
import Process from './Pages/Process.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap');
    
    </style>
    <div className="container">
      <Header />
      <About />
      <Process />
    </div>
  </StrictMode>,
)
