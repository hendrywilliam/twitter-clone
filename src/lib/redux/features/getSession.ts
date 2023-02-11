import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabase";

export const getSessionUser = createAsyncThunk("login/getSession", async () => {
  const { data, error } = await supabase.auth.getSession();
  if (data) {
    return data;
  }
});

interface UserState {
  userSession: {} | null | undefined;
}

const initialState = {
  userSession: null,
} as UserState;

export const getSessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSessionUser.fulfilled, (state, action) => {
      const newSessionUser = (state.userSession = action.payload);
      state.userSession = newSessionUser;
    });
  },
});

export default getSessionSlice.reducer;
