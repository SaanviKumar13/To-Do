import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEdit = (task) => {
    setEditedTaskId(task.id);
    setEditedTaskText(task.text);
  };

  const handleSaveEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: editedTaskId, text: editedTaskText },
    });
    setEditedTaskId(null);
    setEditedTaskText("");
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          {editedTaskId === task.id ? (
            <input
              type="text"
              value={editedTaskText}
              onChange={(e) => setEditedTaskText(e.target.value)}
              autoFocus
            />
          ) : (
            <p
              className={`task-text ${task.completed ? "completed" : ""}`}
              onClick={() => handleToggle(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </p>
          )}
          <div className="task-actions">
            {editedTaskId === task.id ? (
              <button className="action-btn" onClick={handleSaveEdit}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            ) : (
              <>
                <button className="action-btn" onClick={() => handleEdit(task)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="action-btn"
                  onClick={() => handleToggle(task.id)}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </>
            )}
            <button
              className="action-btn delete-btn"
              onClick={() => handleDelete(task.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
