import { configureStore } from "@reduxjs/toolkit";
import bookplaceReducer from "./Features/BookPlace";

export const store = configureStore({
  reducer: {
    bookplace: bookplaceReducer,
    
  },
});
