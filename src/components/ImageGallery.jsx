import React from 'react'

const ImageGallery = ( {images} ) => {
  return (
    <div>
        {images.map((image, id) => {
            <img src={image.src} key={id} alt="" />
        })}
    </div>
  )
}

export default ImageGallery