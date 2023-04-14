import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { blogService } from "./blogService";


export const getAllBlogs = createAsyncThunk(
  "blogs/get",
  async (thunkAPI) => {
    try {
      return await blogService.getBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleBlog = createAsyncThunk(
  "blog/get",
  async (id,thunkAPI) => {
    try {
      return await blogService.getBlog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



const initialState = {
  All: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogsSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.All = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(getSingleBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.SingleBlog = action.payload;
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });;
  },
});

export default blogsSlice.reducer;
