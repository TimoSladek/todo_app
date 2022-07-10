import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectTodoById, todoEdited, todoDeleted } from "./todosSlice";

export const EditTodoForm = () => {
    const { todoId } = useParams()

    const oldTodo = useSelector(state => selectTodoById(state, todoId))

    const [todo, setTodo] = useState(oldTodo.todo)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onTodoChanged = e => setTodo(e.target.value)


    const onTodoUpdated = () => {
        if(oldTodo.todo !== todo) {
            dispatch(
                todoEdited({todoId, todo})
            )
            navigate(`/`)
        }
    }

    const onDeletedTodo = () => {
        dispatch(todoDeleted({todoId}))
        navigate(`/`)
    }

    return (
        <section>
            <form>
                <label>Edit todo: </label>
                <input type="text" value={todo} onChange={onTodoChanged}/>
                <button type="button" onClick={onTodoUpdated}>Edit</button>
                <button type="button" onClick={onDeletedTodo}>Delete</button>
            </form>
        </section>
    )
}