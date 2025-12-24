import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk<post[]>(
    'auth/fetchPosts',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        return result.products;
    },
)

interface post {
    title: string
}

interface authState {
    posts: post[], 
    token : string
}

const initialState: authState =
{
    token: "",
    posts: []
}


const authSlice = createSlice({
    
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const { email } = action.payload;
            state.token = email;
        },
        logout(state) {
            state.token = ''
        },
        removePosts(state){
            state.posts = []
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
    }

})

export const { login, logout, removePosts} = authSlice.actions

export default authSlice.reducer