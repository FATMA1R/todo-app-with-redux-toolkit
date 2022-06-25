import React from 'react';
import { removeTask, doneTask } from '../redux/todoSlice/TodoSlice';
import {useDispatch} from 'react-redux';

import EditTask from './EditTask';

function TodoItem({ todo }) {
    const dispatch= useDispatch();
  return (
    <div className={`todo-item ${todo.isDone ? "done" : "undone" } `}>
        <div className='text'> 
            <h2> {todo.title}</h2>
            <p> {todo.description}</p>
        </div> 

         <span > 
             {/* onClick={()=> dispatch(doneTask ({id: todo.id})) } */}
            {todo.isDone ? "Done" : "Not Done"}
        </span>

         <EditTask id={todo.id} />
           

<button style={{marginTop:"10px", backgroundColor:"BLACK",border:"none", borderRadius:"5px", height:"40px",
        fontSize:"20px",color:"white", width :"150px"}}
          onClick={()=> dispatch(removeTask({id: todo.id})) }> remove</button>

        
         
    </div>
  )
}

export default TodoItem