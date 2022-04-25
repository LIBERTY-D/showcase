import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { themeContext} from './context'
import "./toggle.css"

function Toggle() {
 const theme  =  useContext(themeContext)
 function changeTheme(){
     theme.dispatch({type:"TOGGLE"})
 
}
  return (
    <div className="toggle">
     <FaMoon className="moon"/>
     <FaSun className="sun" />
     <div className="toggle-btn" style={{left:theme.state.DARKMODE?0:25}} onClick={changeTheme}></div>

    </div>
  )
}

export default Toggle