import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./reducer/ContactReducer";

export const store = configureStore({
  reducer: {
    contacts: ContactReducer
  },
});


