import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

function StateProvider({ initialState, reducer, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);

export default StateProvider;
