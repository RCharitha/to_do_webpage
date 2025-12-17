import React, { useState } from "react";
import Navbar from "../components/navbar";
import Input from "../components/input";
import Tasks from "../components/Tasks";

function Mainpage() {
  const [tasks, setTasks] = useState([]);

  // ADD TASK
  const addTask = (text) => {
    setTasks([...tasks, { text, done: false }]);
  };

  // DELETE TASK
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // MARK AS DONE
  const markDone = (index) => {
    const updated = [...tasks];
    updated[index].done = true;
    setTasks(updated);
  };

  return (
    <>
      <Navbar />
      <Input onAdd={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onDone={markDone}
      />
    </>
  );
}

export default Mainpage;
