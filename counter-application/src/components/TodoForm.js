import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder={"Add a new task..."}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;