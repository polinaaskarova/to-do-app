import React, { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

function Todo({ todo, onRemoveTodo, onUpdateInput }) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);

  const [newInput, setNewInput] = useState(content)

  const updateInput = () => {
    const request = {
      id: id,
      content: newInput
    }
    onUpdateInput(request);
    setEditable(false);
  }

  const removeTodo = () => {
    onRemoveTodo(id);
  }
  return (
    <div className='todo-container'>
      <div style={{ color: '#e17749ef' }}>
        {
          editable ? <input className='todo-new-input' value={newInput} onChange={(e) => setNewInput(e.target.value)} type="text" style={{ color: 
'#e17749ef' }} /> : content
        }
      </div>
      <div className='re-icons'>
        <CiCircleRemove onClick={removeTodo} className='remove-icon' />
        {
          editable ? <FaCheck className='check-icon' onClick={updateInput} />
            : <MdEdit className='edit-icon' onClick={() => setEditable(true)} />
        }
      </div>

    </div>
  )
}

export default Todo;