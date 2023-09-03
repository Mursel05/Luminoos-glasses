import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const initialState = {
  blogs: [],
  products: [],
  codes: [],
  faq: [],
  loading: false,
};

export const getData = createAsyncThunk(
  "fetchData/getData",
  async (thunkApi) => {
    const { data, error } = await supabase
      .from("Products")
      .select("*")
      .order("id", { ascending: true })
      .limit(25);
    if (error) throw error;
    return data;
  }
);
export const getFaq = createAsyncThunk("fetchData/getFaq", async (thunkApi) => {
  const { data, error } = await supabase.from("FAQ").select("*").limit(5);
  if (error) throw error;
  return data;
});
export const getCodes = createAsyncThunk(
  "fetchData/getCodes",
  async (thunkApi) => {
    const { data, error } = await supabase
      .from("promo-code")
      .select("*")
      .limit(1);
    if (error) throw error;
    return data;
  }
);
export const getBlogs = createAsyncThunk(
  "fetchData/getBlogs",
  async (thunkApi) => {
    const { data, error } = await supabase.from("blogs").select("*").limit(6);
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

    [getCodes.rejected]: (state) => {
      state.loading = false;
    },
    [getCodes.pending]: (state) => {
      state.loading = true;
    },
    [getCodes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      payload != [] && (state.codes = payload);
    },

    [getBlogs.pending]: (state) => {
      state.loading = true;
    },
    [getBlogs.fulfilled]: (state, { payload }) => {
      state.loading = false;
      payload != [] && (state.blogs = payload);
    },
    [getBlogs.rejected]: (state) => {
      state.loading = false;
    },

    [getFaq.pending]: (state) => {
      state.loading = true;
    },
    [getFaq.fulfilled]: (state, { payload }) => {
      state.loading = false;
      payload != [] && (state.faq = payload);
    },
    [getFaq.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const fetchReducer = allSlice.reducer;
