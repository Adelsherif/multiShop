import { createAsyncThunk } from "@reduxjs/toolkit";


export const products = createAsyncThunk('json',
    async () =>{
        const result= fetch(`https://fakestoreapi.com/products`).then(resp => resp.json()).then(data => data)
         return result;
    }
)