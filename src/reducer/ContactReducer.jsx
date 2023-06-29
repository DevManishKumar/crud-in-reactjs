import { createSlice } from "@reduxjs/toolkit";
import { contactList } from "../Data";

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactList,
  reducers: {
    addContact: (state, action) => {
      //   console.log(action);
      state.push(action.payload);
    },
    updateContact: (state, action) => {
      const { id, name, phone } = action.payload;
      const ucontact = state.find((contact) => contact.id == id);
      if (ucontact) {
        ucontact.name = name;
        ucontact.phone = phone;
      }
    },
    deleteContact: (state, action) => {
      const { id } = action.payload;
      const ucontact = state.find((contact) => contact.id == id);
      if (ucontact) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addContact, updateContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
