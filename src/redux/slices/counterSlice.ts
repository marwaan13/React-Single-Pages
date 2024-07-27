import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value : 20
}


const counterSlice = createSlice({
    name : "counter slice",
    initialState ,
    reducers : {
        increment : (state) => {
            state.value++
        },

        decrement : (state) => {
            if(state.value !== 0) {
                state.value--
            }
        },

        resetCounter : (state) => {
            state.value = 0
        },

        incrementByValue : (state, action) => {
            state.value = state.value + action.payload
        }
    }
}) 

export const  { decrement, increment, resetCounter, incrementByValue } = counterSlice.actions;
export default counterSlice;