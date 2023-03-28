import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme";
import authSlice from "./slices/auth-slice";

const reducer = combineReducers({ theme, authSlice });

export default configureStore({ reducer });
