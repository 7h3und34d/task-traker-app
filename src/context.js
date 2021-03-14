import { createContext, useContext } from "react";
import { useTaskList, useTaskTimer } from "./hooks";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const { state: tasksState, dispatch: tasksDispatch } = useTaskList();
  const { state: timerState, dispatch: timerDispatch } = useTaskTimer();

  return (
    <TaskContext.Provider
      value={{
        state: { tasks: tasksState, timer: timerState },
        tasksDispatch,
        timerDispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const ctx = useContext(TaskContext);
  if (ctx === null) {
    throw Error("useTaskContext needs to be executed under TaskProvider");
  }
  return ctx;
}
