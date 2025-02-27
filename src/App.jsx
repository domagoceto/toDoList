import { useEffect, useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Sayfa yüklendiğinde localStorage'dan veri al
  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) {
        setTasks(storedTasks); // Eğer storedTasks varsa, tasks state'ini güncelle
      }
    } catch (error) {
      console.error('Error reading from localStorage', error);
    }
  }, []);

  // tasks state'i değiştiğinde, yeni veriyi localStorage'a kaydet
  useEffect(() => {
    try {
      if (tasks.length > 0) { // tasks boş değilse kaydet
        localStorage.setItem('tasks', JSON.stringify(tasks));  // tasks array'ini JSON formatında kaydediyoruz
      }
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
  }, [tasks]); // tasks değiştiğinde çalışır

  const addTask = (task) => {
    setTasks([...tasks, task]);  // Yeni bir görev eklerken, tasks array'ini güncelle
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);  // Silinen görevi tasks array'inden çıkart
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center py-10'>
      <h1 className='text-3xl font-bold mb-6'>✅ To-Do List</h1>
      <ToDoInput addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
