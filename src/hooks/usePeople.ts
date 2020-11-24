import _mockData from "containers/home/people/_mockData";
import { useReducer } from "react";

import type { IPeople, IPeopleFormData, IPoepleAction } from "types";

function reducer(state: IPeople[], action: IPoepleAction) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((_item) => !action.payload.includes(_item.id));
    case "edit":
      console.log(action.payload.id);
      const index = state.findIndex((_i) => _i.id === action.payload.id);
      const cloneObj = [...state];
      cloneObj[index] = action.payload;
      console.log(cloneObj);
      return cloneObj;

    default:
      return state;
  }
}

function usePeopleReducer() {
  const [state, dispatch] = useReducer(reducer, _mockData);
  const addItem = (payload: IPeopleFormData) => {
    dispatch({
      type: "add",
      payload: {
        ...payload,
        id: Math.floor(Math.random() * Math.floor(9999999999999)),
      },
    });
  };
  const deleteItems = (payload: number[]) => {
    dispatch({
      type: "delete",
      payload,
    });
  };
  const updateItem = (payload: IPeople) => {
    dispatch({
      type: "edit",
      payload,
    });
  };
  return { state, addItem, deleteItems, updateItem };
}

export default usePeopleReducer;
