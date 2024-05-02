import { createSlice } from '@reduxjs/toolkit';
import { InitialUserState } from '../Types';

const initialState: InitialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user', // userの状態を管理する
  initialState: initialState, // InitialState型の変数宣言
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // loginするとuserを更新する
    },
    logout: (state) => {
      state.user = null; // logoutでuserの状態をnullにする
    },
  },
});

console.log(userSlice);

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
