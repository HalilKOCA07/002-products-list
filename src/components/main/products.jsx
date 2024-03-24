import React from 'react'
import data from "../../data"
import "./product.scss"


const Products = () => {
  return (
    <div className="container">
      {
        data.map((product) => 
                <div className="imagesContainer">
                  
                  <div className="imagesCart">
                    <div className="productPrice">
                        <p>{product.price}</p>
                    </div>
                        <img src={product.image} alt="" />
                  </div>

                  <div className="imagesInfo">
                        <p>{product.title}</p>
                  </div>
                  
                </div>
           
        )
      }



    </div>
    
  )
}

export default Products
