import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// fetch data dari public/movies.json
export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const res = await fetch("/movies.json"); // ✅ ambil dari public
  return res.json();
});

const movieSlice = createSlice({
  name: "movies",
  initialState: { items: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
