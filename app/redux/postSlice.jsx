import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialPost = {
  data: [],
  loading: false,
  error: null,
};

export let postThunk = createAsyncThunk("post/fetchPosts", async () => {
  try {
    let result = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=12"
    );
    let data = await result.json();
    return data;
  } catch (e) {
    return e.message;
  }
});

let postSlice = createSlice({
    name: 'post',
    initialState: initialPost,
    reducers: {
        addPost: (state, action) => {

        },
        deletePost: (state, action) => {
          state.data = state.data.filter((post) => post.id !== action.payload);
        },
        editPost:(state, action) => {},
    },
    extraReducers:(builder)=>{
        builder.addCase(postThunk.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(postThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }).addCase(postThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        } )
    }

});

export default postSlice.reducer;
export const {addPost, deletePost, editPost} = postSlice.actions;
