import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded:{
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(todo) {
        return {
          payload: {
            id: nanoid(),
            todo,
            done: false
          }
        }
      },
    },
    todoEdited: (state, action) => {
      const { todoId, todo } = action.payload
      const existingTodo = state.find(todo => todo.id === todoId)
      if(existingTodo){
        existingTodo.todo = todo
        existingTodo.done = false
      }
    },
    todoDeleted: (state, action) => {
      const { todoId } = action.payload
      let id = 0
      state.find((todo, idx) => {
        if (todo.id === todoId) id = idx
      })
      state.splice(id, 1)
    },
    todoCompleted: (state, action) => {
      const { todoId } = action.payload
      const existingTodo = state.find(todo => todo.id === todoId)
      if(existingTodo){
        existingTodo.done = !existingTodo.done
      }
    },
    doneTodosDeleted: (state) => {
      const newState = state.filter(todo => !todo.done)
      state.splice(0, state.length)
      newState.map(todo => 
        state.push(todo)
      )
    }
  }
})

export const { todoAdded, todoEdited, todoDeleted, todoCompleted, doneTodosDeleted } = todosSlice.actions;
export default todosSlice.reducer;
export const selectAllTodos = state => state.todos;
export const selectTodoById = (state, todoId) => state.todos.find(todo => todo.id === todoId);