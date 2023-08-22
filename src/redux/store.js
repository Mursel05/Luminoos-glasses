import { configureStore } from "@reduxjs/toolkit";
import { allReducer } from "./allPost";

export const store = configureStore({ reducer: { allReducer } });
