import React from 'react';
import { createContext, useReducer } from 'react';
export const Store = createContext();

const initialState = {
  userId: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHECK_VALIDITION':
      const personData = action.payload;

      return { ...state, userId: personData };

    default:
      break;
  }
}
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
