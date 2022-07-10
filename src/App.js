import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { TodosList } from './features/todos/TodosList';
import { AddTodoForm } from './features/todos/AddTodoForm';
import { EditTodoForm } from './features/todos/EditTodoForm';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            exact path="/" element={<React.Fragment>
                                      <AddTodoForm />
                                      <TodosList />
                                    </React.Fragment>}/>
          <Route exact path="/edit/:todoId" element={<EditTodoForm />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
