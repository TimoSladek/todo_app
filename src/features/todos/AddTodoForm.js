import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";


export const AddTodoForm = () => {
    const [newTodo, setNewTodo] = useState('')

    const dispatch = useDispatch();

    const onTodoChanged = e => setNewTodo(e.target.value)
    
    const addNewTodo = () => {
        if(newTodo){
            dispatch(
                todoAdded(newTodo)
            )
            setNewTodo('')
        }
    }



    return (
        <section>
            <form>
                <label htmlFor="addTodo">Add todo: </label>
                <input type="text" value={newTodo} onChange={onTodoChanged} ></input>
                <button type="button" onClick={addNewTodo}>Add</button>
            </form>
        </section>
    )
}