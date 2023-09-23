import { configureStore} from "@reduxjs/toolkit";
import { ApiSlice } from "./api/apiSlice";
import AuthReducer from '../features/Auth/AuthSlice'
import  onChangeQuillReducer from '../features/reactQuill/reactQuillSlice'


export const store = configureStore({
    reducer:{
        Auth: AuthReducer,
        ReactQuillOn: onChangeQuillReducer,
        [ApiSlice.reducerPath]: ApiSlice.reducer,
    },

    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ApiSlice.middleware)
    
})