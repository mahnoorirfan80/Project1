import React from 'react'
import Navbar from './src/navbar'
import ControlledCarousel from './src/ControlledCarousel'
import Cards_grid from './src/Cards_grid'

function Home_page() {
  return (
    <div>
      <Navbar/>
      <ControlledCarousel/>

 <Cards_grid/>
    </div>
  )
}

export default Home_page
