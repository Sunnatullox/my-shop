import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { contactService } from "./contactService";

export const createQuery = createAsyncThunk(
  "contact/post",
  async (conatctDate, thunkAPI) => {
    try {
      return await contactService.postQuery(conatctDate);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



const initialState = {
  conatct:{},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.conatct = action.payload;
        if(state.isSuccess === true) {
          toast.success("Contact form submitted successfully"); 
        }
      })
      .addCase(createQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isError === true) {
          toast.success("Something went wrong!"); 
        }
      });
  },
});

export default contactSlice.reducer;
