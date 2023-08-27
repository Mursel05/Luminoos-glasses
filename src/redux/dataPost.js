import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const initialState = {
  products: [],
  loading: false,
};

export const getData = createAsyncThunk(
  "fetchData/getData",
  async (thunkApi) => {
    const { data, error } = await supabase
      .from("Products")
      .select("*")
      .limit(25);
    if (error) throw error;
    return data;
  }
);

export const allSlice = createSlice({
  name: "fetchData",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      payload != [] && (state.products = payload);
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const fetchReducer = allSlice.reducer;
