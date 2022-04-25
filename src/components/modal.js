import React from 'react'
import {FaTimes}  from "react-icons/fa"
function Modal({message,closeModal}) {
  return (
    <main className="modal">
        <FaTimes className="close-modal"  onclick={closeModal}/>
      <div className="modal-content">
         <p>{message}</p>
      </div>

    </main>
  )
}

export default Modal