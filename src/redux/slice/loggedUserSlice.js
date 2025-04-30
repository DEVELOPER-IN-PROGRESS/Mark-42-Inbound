import { createSlice } from "@reduxjs/toolkit";

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState: JSON.parse(localStorage.getItem("loggedInUser")) || {},
    reducers: {
        login: (state, action) => {
            return action.payload
        },
        logout :(state) => {
            localStorage.removeItem("loggedInUser");
            return {}
        }
    }
})
export const { login, logout } = loggedUserSlice.actions
export default loggedUserSlice.reducer