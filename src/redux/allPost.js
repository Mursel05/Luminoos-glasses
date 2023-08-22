import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const initialState = {
  products: [],
  loading: false,
};

export const getAll = createAsyncThunk("all/getAll", async (thunkApi) => {
  const { data, error } = await supabase.from("Products").select("*").limit(25);
  if (error) throw error;
  return data;
});

export const allSlice = createSlice({
  name: "all",
  initialState,
  reducers: {},
  extraReducers: {
    [getAll.pending]: (state) => {
      state.loading = true;
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.loading = false;
      payload != [] && (state.products = payload);
    },
    [getAll.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const allReducer = allSlice.reducer;
