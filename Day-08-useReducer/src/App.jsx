import { useReducer } from "react";
import { taskReducer } from "./reducer/taskReducer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Task Manager</h2>

      <TaskForm dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default App;