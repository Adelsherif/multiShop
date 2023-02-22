import { createSlice } from "@reduxjs/toolkit";
import { products } from "./data";

export const reducerSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        limit:8,
        searchValue:""
    },
    extraReducers:{
        [products.fulfilled] :(state,action) => {
            state.products = action.payload
        }
    },
    reducers:{
        getValue:(state,action) =>{
            state.searchValue = action.payload
        }
    }
})


export const { getValue} = reducerSlice.actions;
export default reducerSlice.reducer;