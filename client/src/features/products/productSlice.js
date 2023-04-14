import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (productId,thunkAPI) => {
    try {
      return await productService.addToWishlist(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  );
  
  export const getSingleProduct = createAsyncThunk(
    "product/getProductById",
    async (id, thunkAPI) => {
      try {
        return await productService.getSingleProduct(id);
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

export const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.All = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(addToWishlist.pending, (state, action) => {
        state.isLoading = true
      }).addCase(addToWishlist.fulfilled, (state , action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = 'Product added to wishlist'
      }).addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getSingleProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getSingleProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.singleProduct = action.payload;
        })
        .addCase(getSingleProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        });
  },
});

export default productsSlice.reducer;
