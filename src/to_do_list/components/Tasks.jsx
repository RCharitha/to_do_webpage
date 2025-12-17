import React from "react";
import "./Tasks.css";

function Tasks({ tasks, onDelete, onDone }) {
  return (
    <div className="task">
      <h3>Your plans for today</h3>

      {tasks.length === 0 ? (
        <p>No tasks added yet</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.done ? "done" : ""}
              >
              {task.text}

              <button
                className="btn"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>

              <button
                className="btn"
                onClick={() => onDone(index)}
              >
                Done
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
