// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// reducer 한개일때
// const store = createStore(counterReducer);

// 여러개일때
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
