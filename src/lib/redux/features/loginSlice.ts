import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabase";

interface UserPassword {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "login/userStatus",
  async ({ email, password }: UserPassword) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data) {
      return data;
    }
  }
);

interface UserState {
  userLog: {} | undefined;
}

const initialState = {
  userLog: {},
} as UserState;

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const newSession = (state.userLog = action.payload);
      state.userLog = newSession;
    });
  },
});

export default LoginSlice.reducer;
