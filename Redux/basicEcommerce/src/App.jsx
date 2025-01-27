import {  useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { toggleModal } from "./features/Modal/modalSlice";


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
