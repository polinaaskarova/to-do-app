import { useState } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateInput = (newInput) => {
    const updatedInput = todos.map((todo) => {
      if (todo.id !== newInput.id) {
        return todo;
      }
      return newInput;
    })
    setTodos([...updatedInput]);
  }

  return (
    <div className='App'>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateInput={updateInput} />
    </div>
  )
}

export default App







