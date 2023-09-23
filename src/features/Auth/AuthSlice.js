import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null
    },
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.accessToken
            state.user = action.payload.user
        },
        logOut: (state, action) => {
            state.token = null
            state.user = null
        }
    }
})


export const {setCredentials, logOut} = AuthSlice.actions

export default AuthSlice.reducer

export const selectCurrentToken = (state) => state.auth.token