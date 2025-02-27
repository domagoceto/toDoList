import ToDoItem from './ToDoItem';


function ToDoList({ tasks, deleteTask }) {
    return (
      <div>
        {tasks.map((task, index) => (
          <ToDoItem 
            key={index} 
            task={task} 
            index={index} 
            deleteTask={deleteTask} // Burada deleteTask fonksiyonunu geçiyoruz
          />
        ))}
      </div>
    );
  }

export default ToDoList;