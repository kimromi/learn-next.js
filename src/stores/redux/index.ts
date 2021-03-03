import { useMemo } from "react";
import { createStore, combineReducers } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TUser = {
  id: string;
  name: string;
};

const initialState: TUser = { id: "defaultId", name: "defaultName" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeId: (state: TUser, action: PayloadAction<TUser["id"]>) => {
      return { ...state, id: action.payload };
    },
    changeName: (state: TUser, action: PayloadAction<TUser["name"]>) => {
      return { ...state, name: action.payload };
    },
  },
});

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export type TStores = ReturnType<typeof rootReducer>;

export const useStore: () => never = () => {
  return useMemo(() => createStore(rootReducer), []);
};

export const { changeId, changeName } = userSlice.actions;
