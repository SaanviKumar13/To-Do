import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
