import React from 'react'
import TodoItem from './Todoitems'
import './style1.css'

const Todo : React.FC =() => {
    return(
        <div className='todo-container'>
          <ol>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
       
          </ol>
        </div>
    )
}
export default Todo;
