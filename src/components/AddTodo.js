import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addTask } from '../redux/todoSlice/TodoSlice';

function AddTodo() {

    const dispatch = useDispatch()

    const [task, setTask] = useState({
        id:Math.random(),
        title: "",
        description :"",
        isDone: false,
    });
  return (
    <div className='add-task'>
        <input type='text' placeholder='enter task title'
               onChange={(e)=>{setTask({...task, title:e.target.value})}} />
        <input type='text' placeholder='enter task description'
               onChange={(e)=>{setTask({...task, description:e.target.value})}}/>
        <button
        onClick={()=> dispatch(addTask(task))}> Add </button>
    </div>
  )
}

export default AddTodo