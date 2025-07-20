import React from 'react';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodList';



function App() {
  return (
    <TodoProvider>
      <div className="container">
        <Header />
        <TodoForm />
        <TodoList/>
      </div>
    </TodoProvider>
  );
}

export default App;
