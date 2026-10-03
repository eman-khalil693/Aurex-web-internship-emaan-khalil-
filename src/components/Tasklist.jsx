import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-message">
        <p>No tasks yet. Add your first task!</p>
      </div>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}

    </div>
  );
}

export default TaskList;
