import React from 'react'
import './amenities.css'
function Amenties({listing}) {
  return (
    <>
      <h2>What this place offers ?</h2>
      <div id="amenities">
      {listing.amenities.map((item, index) => (
          <div key={index}  >{item}</div>
        ))}
      </div>
    </>
  )
}

export default Amenties
