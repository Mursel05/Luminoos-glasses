import { configureStore } from "@reduxjs/toolkit";
import { fetchReducer } from "./dataPost";

export const store = configureStore({ reducer: { fetchReducer } });
