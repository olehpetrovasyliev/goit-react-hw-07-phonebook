import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGet, apiAdd, apiDel } from '../api/api';

export const getAllContacts = createAsyncThunk('getAllContacts', async () => {
  try {
    const { data } = await apiGet();
    return data;
  } catch (error) {}
});

export const addContact = createAsyncThunk(
  'addContact',
  async (userData, _) => {
    try {
      const { data } = await apiAdd(userData);
    } catch (error) {}
  }
);

export const delContact = createAsyncThunk('delContact', async (id, _) => {
  try {
    const { data } = await apiDel(id);
    return data;
  } catch (error) {}
});
