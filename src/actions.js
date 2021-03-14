export function addNewTask(tasksDispatch, timerDispatch) {
  return function (taskName) {
    if (taskName.length) {
      tasksDispatch({ type: "ADD", payload: { time: 0, name: taskName } });
      timerDispatch({ type: "ADD" });
    }
  };
}

export function startTimer(timeStatusDispatch) {
  return function (id) {
    timeStatusDispatch({ type: "START", index: id });
  };
}
