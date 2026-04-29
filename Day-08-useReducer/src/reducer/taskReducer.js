export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "CLEAR_TASKS":
      return [];

    default:
      return state;
  }
};