import { ICartItem } from "@/types/cart"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState : {
    data : ICartItem[]
} = {
    data : []
}



export const cartSlice = createSlice({
    initialState,
    name : "cart items",
    reducers : {
        addToCart : (state, action : PayloadAction<ICartItem>) => {
            state.data = [...state.data, action.payload]
        }
    }
})

export const { addToCart } = cartSlice.actions