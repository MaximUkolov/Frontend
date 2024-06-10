import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasks from '../data/tasks';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve(tasks), 500)
  );
  return response;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    sortProducts: (state, action) => {
      state.items = state.items.filter(product => product.size === action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { sortProducts } = productsSlice.actions;
export default productsSlice.reducer;
