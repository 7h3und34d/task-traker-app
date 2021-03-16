import { useTaskContext } from "../context";
import "./style.css";
import pause from "./pause.svg";
import start from "./start.svg";
import remove from "./delete.svg";
import { deleteTask } from "../actions";

export function Tasks() {
  const { state, timerDispatch, tasksDispatch } = useTaskContext();
  const removeTask = deleteTask(tasksDispatch, timerDispatch);
  const { tasks, timer } = state;
  console.log(state);
  return (
    <ul className="tasks-list">
      {tasks.map((_t, id) => (
        <li key={id} className="task-item">
          <span>
            {tasks[id].name} ({timer.times[id]}){" "}
          </span>
          <span>
            {timer.status === "on" && timer.index === id ? (
              <button onClick={() => timerDispatch({ type: "PAUSE" })}>
                <img src={pause} width="15px" alt="pause timer" />
              </button>
            ) : (
              <button onClick={() => timerDispatch({ type: "RUN", index: id })}>
                <img src={start} width="15px" alt="start timer" />
              </button>
            )}
            <button>
              <img
                src={remove}
                onClick={() => removeTask(id)}
                width="15px"
                alt="remove task"
              />
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
