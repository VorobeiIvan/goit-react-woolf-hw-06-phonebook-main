import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeNumber(state, action) {
      state.number = action.payload;
    },
    reset(state) {
      state.name = '';
      state.number = '';
    },
  },
});
export const selectContactsState = state => state.contacts;
export const contactsSliceReducer = contactsSlice.reducer;
export const {
  addContact,
  deleteContact,
  changeFilter,
  changeName,
  changeNumber,
  reset,
} = contactsSlice.actions;
