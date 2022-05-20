import { createSlice } from '@reduxjs/toolkit'

const initialState = {
Cart:[],
RecommendationProduct:[],


}

const AddToCart = createSlice({
  name: "addTocart",
  initialState,
  reducers: {
      addCart:(state , {payload})=>{
          state.Cart.push(payload)
      },
      removetoCart:(state, {payload})=>{
        state.Cart.push(payload)
      },
      autoRecommendation:(state , {payload})=>{
        state.RecommendationProduct.push(payload)
      }
  }
});

export const  { addCart ,removetoCart ,autoRecommendation} = AddToCart.actions

export default AddToCart.reducer