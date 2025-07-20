import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { FaTrash } from 'react-icons/fa';


import { useState } from 'react';

function TodoItem({ todo, updateTodo, removeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
}

export default TodoItem;
