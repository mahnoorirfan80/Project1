import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar'
import ControlledCarousel from './ControlledCarousel'
import Cards_grid from './Cards_grid'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar/>
   <ControlledCarousel/>
   <Cards_grid/>
  </StrictMode>,
)
