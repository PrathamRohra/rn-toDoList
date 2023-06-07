import { createSlice } from '@reduxjs/toolkit'
let id = 0;
const initialState = {
    toDoList: [],
    /* 
        key -> stores incremented id,
        taskName: stores task
        done -> is the task done? initially false
    */
}


export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
        addTasks: (state, action) => {
            state.toDoList = [...state.toDoList, {key: ++id, taskName: action.payload.taskName, done: false}];
        },
        markAsDone: (state, action) => {
            const { key } = action.payload;
            state.toDoList = state.toDoList.map(task =>
                task.key === key ? { ...task, done: !task.done } : task
            );
        },
        deleteAll: (state)=>{
            state.toDoList = [];
        }
          
  },
})


export const { addTasks, markAsDone, deleteAll } = toDoSlice.actions

export default toDoSlice.reducer

