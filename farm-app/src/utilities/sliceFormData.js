import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    details: []
  };
const sliceFormData = createSlice(
    {
        name:'FormData',
        initialState,
        reducers:{
            getData:(state,action)=>{
                state.details.push(action.payload)
                

            },
            clearData:(state)=>{
                state.data=[];
            }

        },
    }
);

export const {getData,clearData} =sliceFormData.actions;
export default sliceFormData.reducer;