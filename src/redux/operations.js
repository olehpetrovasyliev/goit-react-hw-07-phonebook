import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGet, apiAdd, apiDel } from '../api/api';

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const { data } = await apiGet();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userData, _) => {
    try {
      const { data } = await apiAdd(userData);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const delContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, _) => {
    try {
      const { data } = await apiDel(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
