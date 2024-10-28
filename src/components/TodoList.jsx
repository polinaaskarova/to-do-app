import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdateInput }) {

  return (
    <div className='todo-list-box'>
      {
        todos && todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateInput={onUpdateInput} />
        ))
      }

    </div>
  )
}

export default TodoList;