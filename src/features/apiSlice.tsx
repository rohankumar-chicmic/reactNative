import { createSlice } from "@reduxjs/toolkit";

interface post {
    title: string
}

interface postState {
    posts: post[], 
    loading: boolean, 
    error: any
}

const initialState: postState= {
    posts: [], 
    loading: false,
    error: null
}

const apiSlice = createSlice({
    name: 'api', 
    initialState, 
    reducers:{
        fetchRequest(state){
            state.loading = true;
            state.error = null;
        }, 
        fetchSuccess(state, action){    
            state.loading = false;
            state.posts = action.payload;
        }, 
        fetchFailure(state, action){
            state.loading = false;   
            state.error = action.payload;
        },
        removePosts(state){
            state.posts = []
        }
    }
})

export const {
    fetchRequest, 
    fetchSuccess,
    fetchFailure,
    removePosts
} = apiSlice.actions

export default apiSlice.reducer;
