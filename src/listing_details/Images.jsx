import React from 'react'
import './Images.css'
function Images({listing}) {
  
  const imageUrls = [
    listing.images.thumbnail_url,
    listing.images.medium_url,
    listing.images.picture_url,
    listing.images.xl_picture_url,
  ];
  return (
    <>
      <div id="main_container">
        <div >
             <img src={imageUrls[0]} id="main_img" alt="" />
        </div>
        <div id="side_imgs_container">
        {imageUrls.map((item, index) => (
          <img id="side_imgs" src={imageUrls[index]} alt=""  />
        ))}
        </div>
      </div>
    </>
  )
}

export default Images
