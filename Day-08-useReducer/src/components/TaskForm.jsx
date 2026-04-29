import { useState } from "react";

function TaskForm({ dispatch }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text: task }
    });

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-success">Add</button>
    </form>
  );
}

export default TaskForm;