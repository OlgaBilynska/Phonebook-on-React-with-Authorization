import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from './../API';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const registeredUser = await API.signUp(credentials);
      API.setAuthHeader(registeredUser.token);
      console.log('rUser', registeredUser);
      return registeredUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const loggedInUser = await API.login(credentials);
      API.setAuthHeader(loggedInUser.token);
      return loggedInUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const loggedOutUser = await API.logOut();
      API.clearAuthHeader();
      return loggedOutUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(`Sorry, I'm not able to fetch the user`);
    }

    try {
      API.setAuthHeader(persistedToken);
      const refreshedUser = API.refresh();
      return refreshedUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
