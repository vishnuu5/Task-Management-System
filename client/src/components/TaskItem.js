import React from "react";

const TaskItem = ({ task, onDelete, onToggleStatus }) => {
  return (
    <div className="p-4 bg-white shadow rounded mb-2 flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
        <p className="text-xs text-gray-400">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        <p
          className={`text-xs font-bold ${
            task.status === "Completed" ? "text-green-500" : "text-yellow-500"
          }`}
        >
          Status: {task.status}
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() =>
            onToggleStatus(
              task._id,
              task.status === "Pending" ? "Completed" : "Pending"
            )
          }
          className="bg-green-500 text-white p-2 rounded mr-2"
        >
          AddTask
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
