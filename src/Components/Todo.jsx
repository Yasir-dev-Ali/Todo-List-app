import React,{useState} from 'react';





const Todo = ({ todos, setTodos }) => {
    // Delete Button
    const handDelete = (id) => {
        
        const updatedTodos = todos.filter((todo) => {
            return todo.id !== id;
        
        })
        setTodos(updatedTodos);
    };
    
// Updated Button
    const updateTodo = (id, updatedTitle) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: updatedTitle };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <div className="mt-6">
                <ul>
                    {todos.map((todo) => {
                        return (
                            <li key={todo.id} className="flex justify-between items-center border-b-2 border-blue-600 p-2">
                                <span>{todo.title}</span>
                                <div>
                                    <button
                                        className="bg-green-600 text-white font-bold p-2 mr-2"
                                        onClick={() => updateTodo(todo.id, 
                                            window.prompt("Enter the updated title", todo.title)
                                        

                                        )}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        id={todo.id}
                                        className="bg-red-600 text-white font-bold p-2"
                                        onClick={()=>handDelete(todo.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Todo;
