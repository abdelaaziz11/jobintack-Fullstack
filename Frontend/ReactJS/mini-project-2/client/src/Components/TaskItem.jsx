import React from 'react';

function TaskItem({ id, texte, fait, onToggle, onDelete }) {
  return (
    <li className={`task-item ${fait ? "done" : ""}`}>
      <div className="left">
        <input 
          type="checkbox" 
          checked={fait} 
          onChange={() => onToggle(id)} 
        />
        <span>{texte}</span>
      </div>

      <button className="delete-btn" onClick={() => onDelete(id)}>
        ✖
      </button>
    </li>
  );
}

export default TaskItem;
