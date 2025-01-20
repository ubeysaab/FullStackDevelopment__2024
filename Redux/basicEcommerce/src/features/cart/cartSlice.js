import {createSlice} from "@reduxjs/toolkit";
import cartItems from '../../cartItems'


const initialState = {
  cartItems,
  // how many items of that specific product 
  amount:4,
  total:0,
  isLoading:true
}

// create slice : which is responsible about the cart 


const cartSlice = createSlice({
  name:'cart',
  initialState
})

// console.log(cartSlice)
export default cartSlice.reducer