import { configureStore } from "@reduxjs/toolkit";
import coinDetailsSliceReducer from "./slice/coinDetailsSlice";
import  loggedUserSliceReducer  from "./slice/loggedUserSlice";


const store = configureStore({
    reducer: {
        coinDetailsReducer: coinDetailsSliceReducer,
        loggedUserReducer : loggedUserSliceReducer
    }
})

export default store