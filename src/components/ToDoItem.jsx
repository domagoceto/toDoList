import './ToDoItem.css';

function ToDoItem({ task, index, deleteTask }) {
  // Silme işlemi için handleDelete fonksiyonunu kullanıyoruz
  const handleDelete = () => {
    deleteTask(index); // Burada index ile silme işlemi yapıyoruz
  };

  return (
    <div className='todo-item'>
      <span>{task}</span>
      {/* onClick ile handleDelete fonksiyonunu çağırıyoruz */}
      <button onClick={handleDelete}>Sil</button>
    </div>
  );
}

export default ToDoItem;
