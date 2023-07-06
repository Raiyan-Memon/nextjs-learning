'use client'

import React, { useEffect, useState } from "react";
import toastr from "toastr";
import 'toastr/build/toastr.css';


export default function Page() {

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        'progressBar': true
    }

    const [myInput, updateName] = useState('')
    const [todos, updateTodo] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        var arrayTodo = localStorage.getItem("todos");
        if (arrayTodo != '') {
            try {
                arrayTodo = arrayTodo.split(",");
            } catch (error) {
                console.log(error);
            }
            toastr.warning('All Your Previous Notes has been imported', 'Pevious Notes');
            updateTodo(arrayTodo);
        }
    }, [])

    function updatingTodoList() {
        if (myInput != '') {
            updateTodo(todos.concat(myInput));
            toastr.success('Added', "New Note Added");
        }
        updateName('');
    }

    function DeleteTodo(position) {
        toastr.error('Deleted', "Note Deleted Successfully");
        todos.splice(position, 1);
        if (update) {
            setUpdate(false);
        } else {
            setUpdate(true);
        }
    }

    useEffect(() => {
        updatingTodoList();
        localStorage.setItem("todos", todos);
    }, [update]);

    useEffect(() => {
        localStorage.setItem("todos", todos);
    }, [todos]);

    return (
        <div className="container"><h1 className="text-center">Todo's App</h1>
            <form className="" onSubmit={(e) => e.preventDefault()} action="">
                <div className="row ">
                    <label htmlFor="">Your Todo</label>
                    <div className="col-md-10 col-10">
                        <input type="text" placeholder="Type Your Todo Here" className="form-control" value={myInput} onChange={(e) => updateName(e.target.value)} name="" id="" />
                    </div>
                    <div className="col-md-2 col-2">
                        <button onClick={updatingTodoList} type="submit" className="btn btn-outline-success">Add</button>
                    </div>
                </div>
            </form>
            {/* <p>Value : {myInput}</p> */}
            <h2 className="mt-5 text-center">Todo List</h2>
            <div className="row justify-content-center">
                {todos.map((value, key1) => (
                    <div key={key1} className="col-md-2 col-4 m-2 bg-light text-dark rounded border text-center align-items-center">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="pt-1">{value}</p>
                            </div>
                            <div className="col-md-12 text-end" onClick={() => DeleteTodo(key1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" cursor={'pointer'} fill="red" height="24" viewBox="0 -960 960 960" width="48"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" /></svg>
                            </div>
                        </div>
                    </div>
                    // <p key={key1}>{value}<span className={key1}  ><svg xmlns="http://www.w3.org/2000/svg" cursor={'pointer'} fill="red" height="24" viewBox="0 -960 960 960" width="48"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" /></svg></span></p>
                ))}
            </div>
        </div>


    )
}