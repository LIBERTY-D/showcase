import React from 'react'
import Me from "../images/IMG-20220410-WA0034.jpg"
import "./introduction.css"





function Introduction() {
  return (
<section className="intro">
    {/* left */}
 <main className="intro-left">
     <div className="intro-left-wrapper">
         <h2 className="intro-intro">Hello,My name is </h2>
         <h1 className="intro-name">Liberty Daniel</h1>
         {/* titlte */}
         <div className="intro-title">
           <div className="intro-title-wrapper">
             <div className="intro-title-item">Web Developer</div>
             <div className="intro-title-item">Freelancer</div>
             <div className="intro-title-item">FullStack Developer</div>
             <div className="intro-title-item">BackEnd Developer</div>

           </div>
         </div>
         {/* desc */}
         <div className="intro-desc">
         I would love to hear from you.For more information you can visit my Github    account 
         <a href="https://github.com/LIBERTY-D" target="_blank" rel="noopener noreferrer" className="git">here</a>
         <div class="about-skills">
              <span>Html</span>
              <span>Css</span>
              <span>Javascript</span>
              <span>React</span>
            </div>
         </div>
     </div>
 </main>
 {/* right */}
 <main className="intro-right">
     <div className="intro-bg"></div>
     <img src={Me} alt="" className="intro-img" />
 </main>
</section>
  )
}

export default Introduction