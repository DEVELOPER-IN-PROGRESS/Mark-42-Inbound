import { createSlice } from "@reduxjs/toolkit";

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState: {},
    reducers: {
        login: (state, action) => {
            return action.payload
        },
        logout :(state) => {
            return {}
        }
    }
})
export const { login, logout } = loggedUserSlice.actions
export default loggedUserSlice.reducer