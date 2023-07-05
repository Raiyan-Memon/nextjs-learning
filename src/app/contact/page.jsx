'use client'

import React, { useState } from "react"

export default function page() {

    const [myInput, updateName] = useState('')
    const [todos, updateTodo] = useState([]);

    function updatingTodoList() {
        updateTodo(todos.concat(myInput));
        updateName('');
    }

    return (
        <div><p>Contact Page</p>

            <label htmlFor="">Typing</label>
            <input type="text" className="form-control" value={myInput} onChange={(e) => updateName(e.target.value)} name="" id="" />
            <button onClick={updatingTodoList} type="submit" className="btn btn-outline-success mt-1">Add</button>
            <p>Value : {myInput}</p>

            <h2>Todo List</h2>
            <ul>
                {todos.map(value => (
                    <li key={value}>{value}</li>
                ))}
            </ul>





        </div>


    )
}