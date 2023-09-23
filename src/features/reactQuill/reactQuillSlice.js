import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {checkImage, ImageUpload } from "../../utils/ImageUpload";


const initialState={
    loading: false,
    data: {},
      error: ''
}
export const onChangeQuill = createAsyncThunk(
    'ReactQuill/onchange',
    async(files )=>{
          const file = files[0]
      try{
       const photo = await ImageUpload(file)
  
      return photo

      }catch(err){ 
        const check = checkImage(file)
        console.log(check)
        if(!file){
            throw Error('File does not exist')
        }
       
        if(check) {
            throw Error(check)
        }else{
              throw Error(err.message)
        }
         
      }
    }
)

export const onChangeQuillSlice = createSlice({
    name: 'deleteCategory',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(onChangeQuill.pending, state =>{
          state.loading = true
        })
        builder.addCase(onChangeQuill.fulfilled, (state, action)=>{
          state.loading = false
          state.data = action.payload
          state.error = ''
        })
        builder.addCase(onChangeQuill.rejected, (state, action)=>{
          state.loading= false
          state.data = {}
          state.error = action.error.message
        })
  }
})
export default onChangeQuillSlice.reducer