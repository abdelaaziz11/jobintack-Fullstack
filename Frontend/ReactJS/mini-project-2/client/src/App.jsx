import React, { useState } from 'react';
import TaskList from './Components/TaskList';
import './App.css';

function App() {
  const [nouvelleTache, setNouvelleTache] = useState("");
  const [taches, setTaches] = useState([]);
  const [filter, setFilter] = useState("all");
  // all | done | todo

  const handleAjouter = () => {
    if (nouvelleTache.trim() === "") return;

    const tacheObjet = {
      id: Date.now(),
      texte: nouvelleTache,
      fait: false
    };

    setTaches(prev => [...prev, tacheObjet]);
    setNouvelleTache("");
  };

  const handleToggle = (id) => {
    setTaches(prev =>
      prev.map(t =>
        t.id === id ? { ...t, fait: !t.fait } : t
      )
    );
  };

  const handleDelete = (id) => {
    setTaches(prev => prev.filter(t => t.id !== id));
  };

  // FILTER LOGIC
  const filteredTaches = taches.filter(t => {
    if (filter === "done") return t.fait;
    if (filter === "todo") return !t.fait;
    return true; // all
  });

  return (
    <div className="app">
      <h1>Todo App</h1>
      {/* FILTER BUTTONS */}
      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
        <button
          className={filter === "todo" ? "active" : ""}
          onClick={() => setFilter("todo")}
        >
          Todo
        </button>
      </div>

      {/* Add Task */}
      <div className="input-container">
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={handleAjouter}>Ajouter</button>
      </div>



      {/* TASK LIST */}
      <TaskList
        taches={filteredTaches}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
