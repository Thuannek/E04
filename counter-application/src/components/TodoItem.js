
import React from 'react';

const TodoItem = ({ task, index, deleteTask, toggleTask }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
    </li>
  );
};

export default TodoItem;