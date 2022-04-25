import React from 'react'
import Product from "./product"
import { webs } from '../data/data'
import "./productList.css"

function ProductList() {
  return (
    <section className="product-list">
        {/* pl texts */}
        <div className="product-list-texts">
            <h1 className="product-list-title">Projects</h1>
            <p className="products-list-desc">
                Examples of some of my projects built with React,Javascript,Mongoose,MongoDb,HTML and CSS.
            </p>
        </div>
        {/* product list items */}
      <div className="product-list-items">

        {
          webs.map((item,_)=>{
          return <Product  key={item.id} {...item} />
          })
        }
       
      </div>
    </section>
  )
}

export default ProductList