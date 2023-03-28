import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme";
import user from "./slices/user";

const reducer = combineReducers({ theme, user });

export default configureStore({ reducer });
