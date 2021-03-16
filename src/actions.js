export function addNewTask(tasksDispatch, timerDispatch) {
  return function (taskName) {
    if (taskName.length) {
      tasksDispatch({ type: "ADD", payload: { name: taskName } });
      timerDispatch({ type: "ADD" });
    }
  };
}

export function deleteTask(tasksDispatch, timerDispatch) {
  return function (taskId) {
    tasksDispatch({ type: "DELETE", index: taskId });
    timerDispatch({ type: "DELETE", index: taskId });
  };
}
