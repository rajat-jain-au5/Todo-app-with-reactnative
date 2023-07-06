import { createSlice, nanoid } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTask = {
                id: nanoid(),
                name: action.payload.task
            }
            state.push(newTask)
        },
        deleteTodo: (state, action) => {
            return state.filter(el => el.id != action.payload.id)
        }
    }
})

export const { addTodo, deleteTodo } = taskSlice.actions
export default taskSlice.reducer