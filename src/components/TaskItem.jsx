function TaskItem({
  task,
  onToggleTask,
  onDeleteTask
}) {
  return (
    <div
      className={`task-item ${
        task.completed ? "completed" : ""
      }`}
    >

      <div className="task-content">

        <span className="task-text">
          {task.text}
        </span>

      </div>

      <div className="task-actions">

        <button
          type="button"
          className="complete-button"
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;
