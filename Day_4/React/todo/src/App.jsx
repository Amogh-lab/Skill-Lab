import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      setTasks(tasks.map(task => task.id === editId ? { ...task, text: input } : task));
      setEditId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    }

    setInput("");
  };

  const handleEdit = (id) => {
    const task = tasks.find(t => t.id === id);
    setInput(task.text);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editId !== null ? "Update" : "Add"}</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
            <span>{task.text}</span>
            <div className="actions">
              <i className="fas fa-check" title="Complete" onClick={() => toggleComplete(task.id)}></i>
              <i className="fas fa-pen" title="Edit" onClick={() => handleEdit(task.id)}></i>
              <i className="fas fa-trash" title="Delete" onClick={() => handleDelete(task.id)}></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
