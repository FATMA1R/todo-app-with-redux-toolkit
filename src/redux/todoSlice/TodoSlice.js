import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist:[
    {id:Math.random(), title:"  homework " , description:"practice questions ", isDone:false ,},
    {id:Math.random(), title:"Sport" , description:"Going to the game center", isDone:false ,},
    {id:Math.random(), title:"GMC platform" , description:" working", isDone: true ,},

  ]
}

export const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
  
    addTask: (state, action) => {
     state.todolist.push(action.payload);
    },
    removeTask: (state, action) => {
        state.todolist = state.todolist.filter(
            (el)=> el.id !== action.payload.id);
       },
    
       doneTask: (state, action) => {
       let i = state.todolist.findIndex((el)=>el.id === action.payload.id)
       state.todolist[i] = {...state.todolist[i], //
         isDone:!state.todolist[i].isDone,}  // reverse value of isDone
       },
       updateTask: (state, action) => {
        let i = state.todolist.findIndex((el)=> el.id === action.payload.id);

        state.todolist[i] ={

        ...state.todolist[i], 
         title: action.payload.edited.title,
         description: action.payload.edited.description,
       };
      
     },

    }  
})

// Action creators are generated for each case reducer function
export const {  addTask, removeTask, doneTask, updateTask } = TodoSlice.actions

export default TodoSlice.reducer