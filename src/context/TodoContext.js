import React, { createContext, useReducer, useEffect } from 'react';

export const TodoContext = createContext();

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Action creators
  const addTodo = todo => dispatch({ type: 'ADD_TODO', payload: todo });
  const removeTodo = id => dispatch({ type: 'DELETE_TODO', payload: id });
  const updateTodo = (id, text) => dispatch({ type: 'UPDATE_TODO', payload: { id, text } });

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}