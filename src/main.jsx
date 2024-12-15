import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Pages/Header.jsx'
import About from './components/Pages/About.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap');
    
    </style>
    <div className="container">
      <Header />
      <About />
    </div>
  </StrictMode>,
)
