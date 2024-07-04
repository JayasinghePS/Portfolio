import React from 'react'
import "./Hero.css";
import vec1 from "../../images/Vec1.png";
import vec2 from "../../images/Vec2.png";
import me from "../../images/Me.png";

function Hero() {
  return (
    <>
    <div className='hero'>
        <div className='navBar'>
        </div>
        <div className='shapes'>
            <img src={vec1} alt='' className='vec1'/>
            <img src={vec2} alt='' className='vec2'/>
            {/* <img src={me} alt='' className='me'/> */}

                <div className="professions">
                  <h2>Front-end developer <br></br>
                      Back-end developer<br></br>
                      UI/UX designer</h2>
                </div>

                <div className="name">
                  <h1>PRAGEETH JAYASINGHE</h1>
                </div>


        </div>
        
    </div>
    </>
  )
}

export default Hero
