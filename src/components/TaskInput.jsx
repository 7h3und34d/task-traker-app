import { useTaskContext } from "../context";
import { useRef, useContext } from "react";
import { addNewTask } from "../actions";
import "./style.css";

export function TaskInput() {
  const { tasksDispatch, timerDispatch } = useTaskContext();
  const addTask = addNewTask(tasksDispatch, timerDispatch);
  const onKeyUpHandler = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    const value = event.currentTarget.value;
    if (value) {
      addTask(value);
    }
    event.currentTarget.value = null;
  };

  return (
    <div className="task-input">
      <input onKeyUp={onKeyUpHandler} type="text" />
    </div>
  );
}
