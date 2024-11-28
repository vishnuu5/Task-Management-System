import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks");
    setTasks(response.data);
  };

  const handleAddTask = async (newTask) => {
    await axios.post("http://localhost:5000/api/tasks", newTask);
    fetchTasks();
  };

  const handleDeleteTask = async (taskId) => {
    await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
    fetchTasks();
  };

  const handleToggleStatus = async (taskId, status) => {
    await axios.put(`http://localhost:5000/api/tasks/${taskId}`, { status });
    fetchTasks();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Task Management</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
};

export default App;
