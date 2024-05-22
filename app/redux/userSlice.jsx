import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialUser = {
  data: [],
  error: null,
  loading: false,
};

export let userThunk = createAsyncThunk("user/fetchUsers", async () => {
  try {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await result.json();
    return data;
  } catch (e) {
    return e.message;
  }
});

let userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  extraReducers: (builder) => {
    builder.addCase(userThunk.pending, (state)=>{
        state.loading = true;
        state.error = null;
    }).addCase(userThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    }).addCase(userThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    } )
  }
});

export default userSlice.reducer;
