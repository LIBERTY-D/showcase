import React from 'react'
import "./product.css"
function Product({link,image}) {
  return (
    <div className="product">
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      {/* link */}
      <a href={link} target="_blank" rel="noreferrer">
          <img src={`${image}`} alt="name" className="product-img" />
      </a>
    </div>
  )
}

export default Product