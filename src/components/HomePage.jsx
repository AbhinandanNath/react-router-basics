import React from 'react'
import { useNavigate } from 'react-router'


function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <div style={{display:"flex", flexDirection: 'column', gap:'1rem', justifyContent:'center', alignItems:'center'}}>
      My Home Page
      <div style={{width:'10rem'}}>
      <button onClick={navigateHandler}>Go To Products</button>
        </div>
    </div>
  )
}

export default HomePage
