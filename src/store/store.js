import { configureStore } from "@reduxjs/toolkit";
import favoritesSlices from "./favorites";

export const store = configureStore({
  reducer: {
    favorites: favoritesSlices,
  },
});
