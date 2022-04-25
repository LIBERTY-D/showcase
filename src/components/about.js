import React from 'react'
import Me from "../images/IMG-20220410-WA0005.jpg"
import "./about.css"


function About() {
  return (
    <section className="about">
        {/* left */}
        <main className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
              <img src={Me} alt="" className="about-img" />
          </div>
             
        </main>



        {/* right */}
        <main className="about-right">
           <h1 className="about-title">About Me</h1>
           <p className="about-sub"></p>
         <p className="about-desc">Hi there. Currently in Poland as a student,born in Zimbabwe. I am second year Computer Science student. I am a MERN(Mongoose,Express,React JS,Node JS) STACK developer. I have such a great passion for coding and I really enjoy solving coding challenges and love solving problems. I spent most of my time on my computer figuring ways I can talk with my computer. I really find coding fascinating, especially the fact that new technologies are always being released, this makes my learning experience more interesting and I get to be aware of technological trends.</p>
         <div className="about-bg"></div>
        </main>
    </section>
  )
}

export default About