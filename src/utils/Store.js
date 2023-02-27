import React from 'react';
import { createContext, useReducer } from 'react';
export const Store = createContext();

const initialState = {
  localPerson: { userName: 'Elyas', passWord: 123456, active: false },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHECK_VALIDITION':
      const personData = action.payload;
      if (
        personData.name &&
        personData.passWord === state.localPerson.userName &&
        state.localPerson.passWord
      )
        personData.active = true;
      return { ...state, localPerson: { ...state.localPerson, personData } };

    default:
      break;
  }
}
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
