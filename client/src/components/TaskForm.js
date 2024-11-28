import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", description: "", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        className="p-2 border rounded w-full mb-2"
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleChange}
        className="p-2 border rounded w-full mb-2"
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="p-2 border rounded w-full mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
