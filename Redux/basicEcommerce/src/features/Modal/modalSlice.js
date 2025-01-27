import {createSlice} from "@reduxjs/toolkit";



let initialState = {
  isOpen : false
}

const modalSlice = createSlice({
  name:'cart',
  initialState,



  reducers : {
    toggleModal : (state)=>{

      state.isOpen = !state.isOpen
  
    }
  }
})


export const {toggleModal} = modalSlice.actions

export default modalSlice.reducer;
