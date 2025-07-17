import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import type {RootState} from "./state/store"
import { decrement, increment, incrementByAmount } from './state/Counter/CounterSlice'

function App() {
  // for getting the value of our counter state from the store 

 let counter = useSelector((store:RootState)=>store.counter.value)
 let dispatch = useDispatch()

  return (
    <>
      <h1>
        {counter}
      </h1>
 
      <button onClick={() => dispatch(increment())}>increment </button> 
      <button onClick={() => dispatch(decrement())}>decrement</button> 
      <button onClick={() => dispatch(incrementByAmount(10))}>increment by 10</button> 


     
    </>
  )
}

export default App
