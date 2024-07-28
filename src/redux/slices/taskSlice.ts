import { ITask } from "@/types/task"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState : {
    data : ITask[]
} = {
    data : []
}



export const taskSlice = createSlice({
    name : "task slice",
    initialState,
    reducers : {
        addTodo : (state, action : PayloadAction<ITask> ) => {
            state.data.push(action.payload)
        }
    }
})


export const  { addTodo } = taskSlice.actions