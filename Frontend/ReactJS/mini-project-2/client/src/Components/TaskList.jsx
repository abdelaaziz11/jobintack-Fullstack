import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ taches, onToggle, onDelete }) {
  return (
    <ul className="task-list">
      {taches.map(tache => (
        <TaskItem
          key={tache.id}
          id={tache.id}
          texte={tache.texte}
          fait={tache.fait}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
