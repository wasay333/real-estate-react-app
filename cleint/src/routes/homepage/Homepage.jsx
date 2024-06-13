import React from 'react'
import "../homepage/homepage.scss"
import Searchbar from '../../component/searchbar/Searchbar'
const Homepage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
<div className="wrapper">
    <h1 className='title'>
        Find Real Estate & Get Your Dream Place
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tenetur tempora odio, soluta ipsum vero rerum, reiciendis facere provident aspernatur eaque voluptas magni sapiente saepe architecto, ab pariatur ipsa totam.</p>
    <Searchbar/>
    <div className="boxes">
        <div className="box">
<h1>16+</h1>
<h2>Years of Experience</h2>
        </div>
        <div className="box">
        <h1>200</h1>
        <h2>Award Gained</h2>   
            </div>
            <div className="box">
            <h1>2000+</h1>
<h2>Property Ready</h2>
        </div>
    </div>
</div>
        </div>
        <div className="imgContainer">
<img src="/bg.png" alt="" />            
        </div>
    </div>
  )
}

export default Homepage