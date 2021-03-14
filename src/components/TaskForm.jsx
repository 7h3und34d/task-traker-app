import { useTaskContext } from "../context";
import { useRef } from "react";
import { addNewTask } from "../actions";

export function TaskForm() {
  const { tasksDispatch, timerDispatch } = useTaskContext();
  const addTask = addNewTask(tasksDispatch, timerDispatch);
  const inputRef = useRef(null);

  return (
    <section>
      <input required ref={inputRef} type="text" />
      <button
        onClick={() => {
          if (!inputRef.current) {
            return;
          }
          const value = inputRef.current.value;
          addTask(value);
          inputRef.current.value = "";
        }}
      >
        Add new task
      </button>
    </section>
  );
}
