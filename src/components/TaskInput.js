import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={handleInputChange}
        className="task-input"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
