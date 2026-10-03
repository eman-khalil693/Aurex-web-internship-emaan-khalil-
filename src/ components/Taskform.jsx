import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTask = taskText.trim();

    if (trimmedTask === "") {
      return;
    }

    onAddTask(trimmedTask);

    setTaskText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="Enter a new task..."
        aria-label="Task"
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;
