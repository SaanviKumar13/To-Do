// action types
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

// action creators
export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    text,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
