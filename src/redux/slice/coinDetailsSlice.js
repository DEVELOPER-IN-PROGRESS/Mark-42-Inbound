import { createSlice } from "@reduxjs/toolkit";

export const coinDetailsSlice = createSlice({
    name: 'coinDetails',
    initialState: {},
    reducers: {
        addCoinDetails: (state, action) => {
            return action.payload
        }
    }
})
export const { addCoinDetails } = coinDetailsSlice.actions
export default coinDetailsSlice.reducer