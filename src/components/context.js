import React, { useReducer } from "react"


export const themeContext =  React.createContext()

const INITIAL_STATE={
DARKMODE:false
}

const themeReducer= (state,action)=>{
    switch(action.type){
          case "TOGGLE":
              return {
                  DARKMODE:!state.DARKMODE
              }
         default:
             return state
    }
}


export function Theme({children}){
    const [state,dispatch] =  useReducer(themeReducer,INITIAL_STATE)
   return (

     <themeContext.Provider value={{state:state,dispatch:dispatch}}>
       {children}
     </themeContext.Provider>

   )


}







