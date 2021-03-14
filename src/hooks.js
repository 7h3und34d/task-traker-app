import { useReducer, useEffect } from "react";

const initialTaskState = [];

function taskListReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

export function useTaskList() {
  const [state, dispatch] = useReducer(taskListReducer, initialTaskState);
  return { state, dispatch };
}

const initialTimeState = {
  times: [],
  status: "off",
  index: null,
};

function taskTimeReducer(state, action) {
  if (action.type === "ADD") {
    return { ...state, times: [...state.times, 0] };
  }
  if (action.type === "DELETE") {
    let index = state.index;
    let status = state.status;
    if (status === "on" && action.index === index) {
      index = -1;
      status = "off";
    }
    return {
      times: [
        ...state.times.slice(0, action.index),
        ...state.times.slice(action.index + 1),
      ],
      index,
      status,
    };
  }
  if (action.type === "RUN") {
    return {
      ...state,
      index: action.index,
      status: "on",
    };
  }
  if (action.type === "PAUSE") {
    return {
      ...state,
      index: null,
      status: "off",
    };
  }
  if (action.type === "INCREMENT") {
    if (state.status === "off") {
      return state;
    }
    return {
      ...state,
      times: [
        ...state.times.slice(0, action.index),
        state.times[action.index] + 1,
        ...state.times.slice(action.index + 1),
      ],
    };
  }
  return state;
}

export function useTaskTimer() {
  const [state, dispatch] = useReducer(taskTimeReducer, initialTimeState);

  useEffect(() => {
    var tid = null;
    if (state.status === "on") {
      tid = setInterval(() => {
        dispatch({ type: "INCREMENT", index: state.index });
      }, 1000);
    }
    if (state.status === "off") {
      clearInterval(tid);
    }
    return () => clearInterval(tid);
  }, [state.status, state.index]);

  return { state, dispatch };
}
