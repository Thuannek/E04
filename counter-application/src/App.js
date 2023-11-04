import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function AddTask(taskText) {
    setTasks([...tasks, { text: taskText, completed: false }]);
  }

  function DeleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function ToggleTask(index) {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h2>Todo List</h2>
      <TodoForm addTask={AddTask} />
      <TodoList tasks={tasks} deleteTask={DeleteTask} toggleTask={ToggleTask} />
    </div>
    
  );
}

export default App;
