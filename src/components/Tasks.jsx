import { useTaskContext } from "../context";

export function Tasks() {
  const { state, timerDispatch } = useTaskContext();
  const { tasks, timer } = state;
  return (
    <ul>
      {tasks.map((_t, id) => (
        <li>
          {tasks[id].name} ({timer.times[id]}){" "}
          {timer.status === "on" && timer.index === id ? (
            <button onClick={() => timerDispatch({ type: "PAUSE" })}>
              PAUSE
            </button>
          ) : (
            <button onClick={() => timerDispatch({ type: "RUN", index: id })}>
              RUN
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
