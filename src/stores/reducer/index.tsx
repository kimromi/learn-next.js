import { useReducer, createContext, useContext, useState } from "react";

export type User = {
  id: string;
  name: string;
};

const ACTION_TYPES = {
  SET_ID: "SET_ID",
  SET_NAME: "SET_NAME",
} as const;

export function setId(id: string) {
  return {
    type: ACTION_TYPES.SET_ID,
    payload: {
      id,
    },
  };
}
export function setName(name: string) {
  return {
    type: ACTION_TYPES.SET_NAME,
    payload: {
      name,
    },
  };
}

export type UserActions = ReturnType<typeof setId> | ReturnType<typeof setName>;

function reducer(state: User, action: UserActions) {
  switch (action.type) {
    case ACTION_TYPES.SET_ID: {
      return { ...state, id: action.payload.id };
    }
    case ACTION_TYPES.SET_NAME: {
      return { ...state, name: action.payload.name };
    }
  }
}

export const IdContext = createContext({} as User["id"]);
export const NameContext = createContext({} as User["name"]);
export const DispatchContext = createContext({} as React.Dispatch<UserActions>);

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    id: "defaultId",
    name: "defaultName",
  });

  return (
    <IdContext.Provider value={state.id}>
      <NameContext.Provider value={state.name}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </NameContext.Provider>
    </IdContext.Provider>
  );
};

export const useUserId = () => useContext(IdContext);
export const useUserName = () => useContext(NameContext);
export const useSetUser = () => useContext(DispatchContext);
