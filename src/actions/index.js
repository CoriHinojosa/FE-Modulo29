export const addTask = (task, desc) => {
  return{
    type: "ADD_TASK",
    payload: {
      id: Date.now(),
      name: task,
      description: desc,
    }
  }
}

export const removeTask = (id) => {
  return{
    type: "REMOVE_TASK",
    payload: id,
  }
}