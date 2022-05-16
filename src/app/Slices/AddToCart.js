import { createSlice } from '@reduxjs/toolkit'

const initialState = {
Cart:[]
}

const AddToCart = createSlice({
  name: "addTocart",
  initialState,
  reducers: {
      addToCart:(state , {payload})=>{
          state.Cart.push(payload)
      },
      removetoCart:(state, {payload})=>{
        state.Cart.push(payload)
      }
  }
});

export const {addToCart} = AddToCart.actions

export default AddToCart.reducer