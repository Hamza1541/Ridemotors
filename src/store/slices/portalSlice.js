import { createSlice } from "@reduxjs/toolkit";

const portalSlice = createSlice({
    name : 'portal',
    initialState : false,
    reducers: {
        displayPortal (state,action){
            return !state;
            //ye abhi change  kiya hy  

        }
    
    }
})

export const { displayPortal } = portalSlice.actions;
export const portalreducer =  portalSlice.reducer;
