import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, updateTodo, removeTodo } = useContext(TodoContext); // <-- add removeTodo here
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo} // <-- pass removeTodo here
          />
        ))
      )}
    </div>
  );
}

export default TodoList;