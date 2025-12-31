import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



interface authState {
    token : string
}

const initialState: authState =
{
    token: "",

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
        }
    }
})

export const { login, logout} = authSlice.actions

export default authSlice.reducer