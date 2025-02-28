import { useState } from "react";
import "./ToDoItem.css";

function ToDoItem({ task, index, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(index, editedTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span>{task}</span>
      )}

      <div className="todo-buttons">
        {isEditing ? (
          <button onClick={handleSave} className="save-button">
            Kaydet
          </button>
        ) : (
          <>
            <button onClick={handleEdit} className="edit-button">
              Düzenle
            </button>
            <button onClick={handleDelete} className="delete-button">
              Sil
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
