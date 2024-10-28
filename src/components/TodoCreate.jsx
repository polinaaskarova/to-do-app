import React, { useState } from 'react';
import '../App.css';

function TodoCreate({ onCreateTodo }) {
    const [newInput, setNewInput] = useState('');

    const clearInput = () => {
        setNewInput('')
    }
    const createTodo = () => {
        if (!newInput) return;
        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newInput
        }
        onCreateTodo(request);
        clearInput();
    }

    return (
        <div className='todo-box'>
            <div className='todo-h1'><h1>My ToDo <span style={{ color: '#085a57ef' }}>List</span> </h1></div>
            <div className='todo-create'>
                <input className='todo-input' type="text" placeholder='What do you need to do?'
                    value={newInput}
                    onChange={(e) => setNewInput(e.target.value)} />
                <button className='btn-todo' onClick={createTodo}>Add</button>
            </div>
        </div>
    )
}

export default TodoCreate;