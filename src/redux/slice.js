import { createSlice } from '@reduxjs/toolkit';
import { addContact, getAllContacts, delContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
const loading = (state, _) => {
  state.contacts.loading = true;
};
const err = (state, { payload }) => {
  state.contacts.loading = false;
  state.error = payload;
};
const usersSlice = createSlice({
  name: 'phoneboook',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.loading = false;
      })
      .addCase(getAllContacts.pending, loading)
      .addCase(getAllContacts.rejected, err)

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        state.loading = false;
      })
      .addCase(addContact.pending, loading)
      .addCase(addContact.rejected, err)
      .addCase(delContact.fulfilled, (state, { payload }) => {
        const contactToDel = state.contacts.items.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.items.splice(contactToDel, 1);
      })
      .addCase(delContact.pending, loading)
      .addCase(delContact.rejected, err);
  },
});

export const { setFilter } = usersSlice.actions;

export const phonebookReducer = usersSlice.reducer;
