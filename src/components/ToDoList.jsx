import ToDoItem from './ToDoItem';


function ToDoList({ tasks, deleteTask,updateTask }) {
    return (
      <div>
        {tasks.map((task, index) => (
          <ToDoItem 
            key={index} 
            task={task} 
            index={index} 
            deleteTask={deleteTask} // Burada deleteTask fonksiyonunu geçiyoruz
            updateTask={updateTask}
          />
        ))}
      </div>
    );
  }

export default ToDoList;