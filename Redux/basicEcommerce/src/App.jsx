import {  useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

import { getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const {isOpen }= useSelector(store => store.modal)


return (

    <>
    
    <h1>
      redux toolkit
    </h1>
    {isOpen&&<Modal/>}
    <Navbar/>
    <CartContainer/>
    </>
  )
}
export default App;
