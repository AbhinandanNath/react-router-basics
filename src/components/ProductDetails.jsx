import React from 'react'
import { useParams,useNavigate } from 'react-router'

function ProductDetails() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  const {productId} = useParams();
  return (
    <div style={{display:"flex", flexDirection: 'column', gap:'1rem', justifyContent:'center', alignItems:'center'}}>
      <h1>Product Details</h1>
      <p>Details about the product</p>
      <p>Product ID: {productId}</p>

      <button onClick={navigateHandler}>Go To Products</button>
    </div>
  )
}

export default ProductDetails
