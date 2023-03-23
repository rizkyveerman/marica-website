import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme";

const reducer = combineReducers({ theme });

export default configureStore({ reducer });
