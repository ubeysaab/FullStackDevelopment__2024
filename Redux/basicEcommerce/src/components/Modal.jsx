import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../features/Modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'

function Modal() {




function handleConfirm(){


  dispatch(toggleModal())
  dispatch(clearCart())
}


const dispatch = useDispatch()

  return (
    <aside className="modal-container">
       <div className="modal">
         <h4>remove all items from your card shop</h4>
         <div className="btn-container">
           <button className="btn confirm-btn" onClick={handleConfirm}>
            Confirm
           </button>
           <button className="btn clear-btn"  onClick={()=>dispatch(toggleModal())}>
            Cancel
           </button>

         </div>
       </div>
    </aside>
  )
}

export default Modal