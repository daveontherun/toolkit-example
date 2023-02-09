import {configureStore} from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";

const store = configureStore({
    reducer:{
        number: numberReducer
    }
})

export default store;