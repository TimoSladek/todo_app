import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTodos, todoCompleted, doneTodosDeleted } from './todosSlice';
import { Link } from 'react-router-dom';


export const TodosList = () => {
    const todos = useSelector(selectAllTodos)

    const dispatch = useDispatch()

    const onChange = (e) => {
        dispatch(todoCompleted({todoId: e.target.value}))
    }

    const clearDoneTodos = () => {
        dispatch(doneTodosDeleted())
    }

    const renderedTodos = todos.map((todo) => (
        <li key={todo.id}>
            <a>{todo.todo}</a>
            <input type="checkbox" value={todo.id} checked={todo.done} onChange={onChange}  />
            &nbsp;<Link to={`/edit/${todo.id}`} className="button muted-button">
                    Edit Todo
                </Link>
        </li>
    ))

    return(
        <section>
            <ul>
                {renderedTodos}
            </ul>
            <button type="button" onClick={clearDoneTodos}>Clear done todos</button>
        </section>
    )
}