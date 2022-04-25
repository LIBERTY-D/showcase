import React, { useContext } from "react";
import Introduction from "./components/introduction";
import About from "./components/about";
import ProductList from "./components/productList";
import Contact from "./components/contact";
import Toggle from "./components/toggle";
import {themeContext} from "./components/context"



function App(){
const theme  =  useContext(themeContext)
const darkMode =  theme.state.DARKMODE

return (
   <main style={{backgroundColor:darkMode?"#222":"white",color:darkMode&& "white"}}>
      <Toggle />
    <Introduction/>
    <About/>
    <ProductList/>
    <Contact/>
   </main>
)

}


export default App;