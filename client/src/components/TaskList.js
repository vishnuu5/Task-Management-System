import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggleStatus }) => {
  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
