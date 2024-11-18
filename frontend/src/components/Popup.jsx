import React from 'react'

const Popup = ({item}) => {
  return (
    <div className="popUpCartAdded">

    <div className="popUpContent_container">

      <div className="cartItemCart_container">
        <img src={item.picture} alt={item.title} className="cartItemCart"/>
      </div>

      <div className="popUpText">
        <span>!Se agregó a tu carrito!</span>
      </div>

      <div className="cartCheckicon_container">
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M10.1818 14.0936L17.0468 7.22864L18.5895 8.77142L10.1818 17.1792L5.4104 12.4078L6.95318 10.865L10.1818 14.0936Z" fill="white"></path></svg>
      </div>
      
    </div>


  </div>
  )
}

export default Popup;