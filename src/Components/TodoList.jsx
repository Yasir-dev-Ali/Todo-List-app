import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Todo from './Todo'



const TodoList = () => {
  const [inputValue, setInputValue] =useState("")
  const [todos, setTodos] = useState([])

  const submitData = (e) => {
    e.preventDefault()
    addTodo (inputValue)
    // setInputValue('')



  }
  const addItem=()=>{
    const newItem={
      id: uuid(),
      title: inputValue,
      completed: false
    }
    setTodos([...todos, newItem])
    setInputValue('')

  }
  console.log("Todo List ",todos );

  
  return (
    <>    
    <div className="container mt-28 mx-auto p-6 max-w-md bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">To-Do List</h1>
      <form action="" onSubmit={submitData}>
        <input type="text" className="w-full p-2 mb-6 border-b-2 border-blue-600" placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button className="w-full p-2 bg-blue-600 text-white font-bold" onClick={addItem}>Add Task</button>
      </form>
      
     
      <Todo todos={todos} setTodos={setTodos}/>

    </div>


    </>
  )
}

export default TodoList