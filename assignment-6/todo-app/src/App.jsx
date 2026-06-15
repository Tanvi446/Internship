import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    const updatedTasks = [
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ].sort((a, b) => a.text.localeCompare(b.text));

    setTasks(updatedTasks);
    setTask("");
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-card">

        <h1>To Do App</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />

          <button onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div className="task-item" key={task.id}>

              <div className="left-section">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(task.id)}
                />

                <span
                  className={
                    task.completed
                      ? "completed"
                      : ""
                  }
                >
                  {task.text}
                </span>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeTask(task.id)}
              >
                Remove
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;