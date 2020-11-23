import _mockData from "containers/home/people/_mockData";
import { useReducer } from "react";

import type { IPeople, IPoepleAction } from "types";

function reducer(state: IPeople[], action: IPoepleAction) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}

function usePeopleReducer() {
  const [state, dispatch] = useReducer(reducer, _mockData);
  const addItem = (payload: IPeople) => {
    dispatch({ type: "add", payload });
  };
  return { state, addItem };
}

export default usePeopleReducer;
