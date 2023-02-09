import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

 const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value++
        }
    }
})

export const {increment}= numberSlice.actions;

export default numberSlice.reducer;