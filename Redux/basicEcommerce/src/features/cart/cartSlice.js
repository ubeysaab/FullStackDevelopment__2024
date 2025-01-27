import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import cartItems from '../../cartItems'


const initialState = {
  cartItems:[],
  // how many items of that specific product 
  amount:0,
  total:0,
  isLoading:true
}

// create slice : which is responsible about the cart 

const URL= "https://www.course-api.com/react-useReducer-cart-project"

export const getCartItems = createAsyncThunk('cart/getCartItems',()=>{
  return fetch(URL)
  .then (res => res.json())
  .catch (err => console.log(err))
})


const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers :{
    clearCart: (state)=>{
      // we can mutate the state directly because behind the scenes immer takes care  of that.
      // the beauty of this ism in fact that we don't need to setup any thing manually as far as the action as far as the action creator we right away get in by default
      // and the only thing we wanna do is  pass in the clearcart function into whatever we getting back from dispatch 
      state.cartItems=[]
      state.amount=0
    },
    removeItem : (state,action)=>{
        // console.log(action,state)
        state.cartItems = state.cartItems.filter(item=> item.id !== action.payload)
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTheTotal: (state)=> {
      const total = state.cartItems.reduce((ac,cv)=> ac+ cv.price*cv.amount,0)
      state.total = total;
      console.log(total)

    }
  },
  extraReducers:{
    [getCartItems.pending]:(state)=>{
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state,action)=>{
      state.isLoading = false
      state.cartItems = action.payload
      state.amount = action.payload.length

    },
    [getCartItems.rejected]:(state)=>{
      state.isLoading = false
    },
  }
})

// console.log(cartSlice)

export const {clearCart,removeItem,increase,decrease,calculateTheTotal} = cartSlice.actions;

export default cartSlice.reducer