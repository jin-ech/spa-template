/**
 * @file 状态收口文件
 * @author jinech
 */

import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user.slice.js';

export const rootReducer = {
    userSlice: userSlice.reducer
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});
