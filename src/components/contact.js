
import React, { useRef, useState } from 'react'
import Modal from './modal';
import emailjs from '@emailjs/browser';
import {FaPhone,FaEnvelope,FaLocationArrow}   from "react-icons/fa"
import "./contact.css"
function Contact() {
    const formRef =  useRef()
    const [isOpen,setIsOpen] = useState(false)
    const [err,setErr] =  useState(false)
    const [empty,setEmpty] =  useState(false)
    // submit function
    function handSubmit(e){
        e.preventDefault()
        const collection = formRef.current.children
        const name = collection[0].value
        const subject =  collection[1].value
        const email =  collection[2].value
        const message = collection[3].value
        if(!name||!subject||!email||!message){
          setEmpty(true)
          setTimeout(()=>{
          setEmpty(false)
        },5000)

        }else{
          setEmpty(false)
               emailjs.sendForm('service_l2hye6o', 'template_7q4t87j', formRef.current,"eTGArRy3Bi9fIi14q")
        .then((result) => {
            if(result.text){
                setIsOpen(true)
                setTimeout(()=>{
                setIsOpen(false)
                },5000)
            }
        }, (error) => {
           setIsOpen(true)
           setErr(true)
           setTimeout(() => {

               setIsOpen(false)
           }, 3000);
        });
        }
   
    }
    const closeModal=()=>{
       setIsOpen(false)
    }

  return (
    <section className="contact">
      <div className="contact-bg"></div>
      {/* contact wrapper */}
      <div className="contact-wrapper">
          {/* left */}
          <div className="contact-left">
           <h1 className="contact-title">Let's discuss your project</h1>
           {/* contact info */}
            <div className="contact-info">
              {/* contact-item */}
              <div className="contact-info-item">
              <FaPhone className="phone" />
                +48 723 708 283
              </div>
              <div className="contact-info-item">
                 <FaEnvelope className="email"/>
                  danielliberty2425@gmail.com
              </div>
              <div className="contact-info-item">       
              <FaLocationArrow className="address"/>
                Ul.Tumidajskiego 20/6
                Lublin
                Poland
              </div>
            </div>
             
          </div>
          {/* right */}
          <div className="contact-right">
              <p className="contact-desc">
                  <b>What's Your Story?</b> Get in touch.Always freelancing if the right project comes along.
              </p>
         {/* form */}
         <p className="empty">{empty&&"make sure all fields are field"}</p>
         <form  ref={formRef} onSubmit={handSubmit}>
             <input type="text"  placeholder="Name" name="user_name" />
             <input type="text"  placeholder="Subject" name="user_subject"/>
             <input type="email" placeholder="Email" name="user_email" />
             <textarea name="Message" placeholder="Message" cols="30" rows="10"></textarea>
             <button>Submit</button>
         </form>
          </div>
      </div>
      
     {isOpen && <Modal message={err?"Something went wrong!":"SuccessFul Submit"} closeModal={closeModal}/>}
    </section>
  )
}

export default Contact