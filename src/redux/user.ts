import {createAsyncThunk} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import userServices from '../services/user';

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (params: any, {rejectWithValue}) => {
    try {
      const response = await userServices.get(params.name || 'Q');
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (params: any, {rejectWithValue}) => {
    try {
      const response = await userServices.getUserInfo(params.username);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUserRepos = createAsyncThunk(
  'user/getUserRepos',
  async (params: any, {rejectWithValue}) => {
    try {
      const response = await userServices.getUserRepos(params.username);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUserOrgs = createAsyncThunk(
  'user/getUserOrgs',
  async (params: any, {rejectWithValue}) => {
    try {
      const response = await userServices.getUserOrgs(params.username);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loadingGetUsers: false,
    successGetUsers: false,
    errorGetUsers: null,
    userInfo: null,
    loadingGetUserInfo: false,
    successGetUserInfo: false,
    errorGetUserInfo: null,
    userRepos: [],
    loadingGetUserRepos: false,
    successGetUserRepos: false,
    errorGetUserRepos: null,
    userOrgs: [],
    loadingGetUserOrgs: false,
    successGetUserOrgs: false,
    errorGetUserOrgs: null,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending.type]: state => {
      state.loadingGetUsers = true;
      state.successGetUsers = false;
      state.errorGetUsers = null;
    },
    [getUsers.fulfilled.type]: (state, action) => {
      state.loadingGetUsers = false;
      state.successGetUsers = true;
      state.errorGetUsers = null;
      state.users = action.payload;
    },
    [getUsers.rejected.type]: (state, action) => {
      state.loadingGetUsers = false;
      state.successGetUsers = false;
      state.errorGetUsers = action.payload;
    },
    [getUserInfo.pending.type]: state => {
      state.loadingGetUserInfo = true;
      state.successGetUserInfo = false;
      state.errorGetUserInfo = null;
    },
    [getUserInfo.fulfilled.type]: (state, action) => {
      state.loadingGetUserInfo = false;
      state.successGetUserInfo = true;
      state.errorGetUserInfo = null;
      state.userInfo = action.payload;
    },
    [getUserInfo.rejected.type]: (state, action) => {
      state.loadingGetUserInfo = false;
      state.successGetUserInfo = false;
      state.errorGetUserInfo = action.payload;
    },
    [getUserRepos.pending.type]: state => {
      state.loadingGetUserRepos = true;
      state.successGetUserRepos = false;
      state.errorGetUserRepos = null;
    },
    [getUserRepos.fulfilled.type]: (state, action) => {
      state.loadingGetUserRepos = false;
      state.successGetUserRepos = true;
      state.errorGetUserRepos = null;
      state.userRepos = action.payload;
    },
    [getUserRepos.rejected.type]: (state, action) => {
      state.loadingGetUserRepos = false;
      state.successGetUserRepos = false;
      state.errorGetUserRepos = action.payload;
    },
    [getUserOrgs.pending.type]: state => {
      state.loadingGetUserOrgs = true;
      state.successGetUserOrgs = false;
      state.errorGetUserOrgs = null;
    },
    [getUserOrgs.fulfilled.type]: (state, action) => {
      state.loadingGetUserOrgs = false;
      state.successGetUserOrgs = true;
      state.errorGetUserOrgs = null;
      state.userOrgs = action.payload;
    },
    [getUserOrgs.rejected.type]: (state, action) => {
      state.loadingGetUserOrgs = false;
      state.successGetUserOrgs = false;
      state.errorGetUserOrgs = action.payload;
    },
  },
});

export default userSlice;
