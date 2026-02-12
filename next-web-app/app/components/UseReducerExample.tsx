import React, { useReducer } from "react";

interface State {
  count: number;
  err: string;
}
interface Action {
  type: "increment" | "decrement";
}
function counterReducer(state: State, action: Action): State {
  if (action.type === "decrement") {
    const newCount = state.count - 1;
    const hasErr = newCount < 0;

    return { ...state, count: hasErr ? state.count : newCount, err: hasErr ? "min reached" : "" };
  }
  if (action.type === "increment") {
    const newCount = state.count + 1;
    const hasErr = newCount > 5;

    return { ...state, count: hasErr ? state.count : newCount, err: hasErr ? "max reached" : "" };
  }
  return state;
}

export default function UseReducerExample() {
  const [state, dispatch] = useReducer(
    counterReducer,
    {
      count: 0,
      err: "",
    },
    (initial) => {
      return { count: initial.count + 2, err: initial.err };
    },
  );

  return (
    <div>
      <div>Count :{state.count}</div>
      {state.err && <div style={{ color: "red" }}>{state.err}</div>}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        {" "}
        increase
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        {" "}
        decrease
      </button>
    </div>
  );
}
