import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteList: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteList.push({ ...action.payload });
    },
    removeFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (item) => item.idMeal !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
