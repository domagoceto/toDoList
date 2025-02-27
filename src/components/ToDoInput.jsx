import { useState } from "react";
import { Plus } from 'lucide-react';
import './ToDoInput.css'; // CSS dosyasını import edin

function ToDoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        placeholder="Yeni görev ekle..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd} className="button">
        <Plus size={18} />
      </button>
    </div>
  );
}

export default ToDoInput;
