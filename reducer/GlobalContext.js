import React, { useContext, useReducer, useState } from 'react';

const initialState = {
  ui: {
    sideBar: {
      visible: false,
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'ON_TOGGLE_SIDEBAR':
      return {
        ...state,
        ui: {
          sideBar: {
            visible: !state.ui.sideBar.visible,
          },
        },
      };
  }
}

const GlobalStateContext = React.createContext(null);
const GlobalDispatchContext = React.createContext(null);

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const state = useContext(GlobalStateContext);
  if (!state) {
    throw new Error('Cannot find GlobalContextProvider');
  }
  return state;
}

export function useGlobalDispatch() {
  const state = useContext(GlobalDispatchContext);
  if (!state) {
    throw new Error('Cannot find GlobalContextProvider');
  }
  return state;
}

export default GlobalContextProvider;
