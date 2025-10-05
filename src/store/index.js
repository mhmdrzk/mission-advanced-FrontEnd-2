import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "@/store/movieSlice";
import myListReducer from "@/store/myListSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    myList: myListReducer,
  },
});
