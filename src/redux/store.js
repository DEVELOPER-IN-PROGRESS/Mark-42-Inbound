import { configureStore } from "@reduxjs/toolkit";
import coinDetailsSliceReducer from "./slice/coinDetailsSlice";


const store = configureStore({
    reducer: {
        coinDetailsReducer: coinDetailsSliceReducer
    }
})

export default store