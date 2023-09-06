import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from './../API';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const registeredUser = await API.signUp(credentials);
      return registeredUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
