function TaskList({ tasks, dispatch }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="card p-2 mb-2 d-flex justify-content-between align-items-center">
          <span>{task.text}</span>

          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              dispatch({ type: "DELETE_TASK", payload: task.id })
            }
          >
            Delete
          </button>
        </div>
      ))}

      {tasks.length > 0 && (
        <button
          className="btn btn-warning mt-3"
          onClick={() => dispatch({ type: "CLEAR_TASKS" })}
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default TaskList;