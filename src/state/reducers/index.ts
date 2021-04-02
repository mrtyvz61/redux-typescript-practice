import { combineReducers } from "redux";

import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// takes reducers function and give back whatever the function return here
export type RootState = ReturnType<typeof reducers>;

// export type: so you can use the state type in other places
// RootState: name of the type
// ReturnType<>: returns the type of the return inside the <>
// typeof rootReducer: the complicated redux type of the reducer that we will let TypeScript decode.

// if you're using redux-toolkit, the root state type is
// export type RootState = ReturnType<typeof store.getState>
