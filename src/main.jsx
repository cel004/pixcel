import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HoverHeader from './Pages/HoverHeader.jsx'
import Header from './Pages/Header.jsx'
import About from './Pages/About.jsx'
import Process from './Pages/Process.jsx'
import Package from './Pages/Package.jsx'
import Addon from './Pages/Addon.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap');
    
    </style>
    <div className="container">
      <HoverHeader />
      <Header />
      <About />
      <Process />
      <Package />
      <Addon />
      <ContactForm />
    </div>
  </StrictMode>,
)
