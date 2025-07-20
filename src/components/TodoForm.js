import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoForm() {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!task.trim()) {
      setError('Please enter the task.');
      return;
    }
    addTodo({ id: Date.now(), text: task, completed: false });
    setTask('');
    setError('');
  };

  return (
    <div className="todo-form-card">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={task}
          onChange={e => {
            setTask(e.target.value);
            if (error) setError('');
          }}
          placeholder="Enter a task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
        {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
      </form>
    </div>
  );
}

export default TodoForm;