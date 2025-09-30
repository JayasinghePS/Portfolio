import React from 'react'
import "./About.css"

function About() {
  return (
    <>
        <section className='about'>
        <h1>About</h1>
      <div className="about-container">
        {/* Left Column - Photo */}
        <div className="about-photo">
          <img 
            src="/Assets/photo_with_no_background.png" 
            alt="About Me" 
          />
        </div>

        {/* Right Column - Description */}
       <div className="about-description">
        <p className="intro-hi">&lt; Hola, amigos! /&gt;</p>

        <h1 className="intro-name">I’m Prageeth Jayasinghe!</h1>
        <p className="intro-text">
          A passionate software engineer who loves 
          building scalable web applications and exploring new technologies. 
          I enjoy working on both frontend and backend, and I’m always curious 
          to learn more and improve my skills.
        </p>
        <div className="intro-buttons">
        <button className='intro-cvbutton'>Download CV</button>
        <button className='intro-contactbutton'>Contact me</button>
        </div>
      </div>

      </div>
        </section>
      
    </>
  )
}

export default About
